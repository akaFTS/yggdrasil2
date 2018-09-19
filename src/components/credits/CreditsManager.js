import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProgressCircles from './ProgressCircles'
import SpecialOptatives from './SpecialOptatives'
import withEvolution from '../providers/withEvolution'
import withElectives from '../providers/withElectives'
import withClasses from '../providers/withClasses'
import TrackStatus from './TrackStatus'

class CreditsManager extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  mapCredits = array => {
    const { allClasses } = this.props
    return array
      .map(code => allClasses.find(classe => classe.code === code))
      .reduce(
        (acc, cur) => acc + parseInt(cur.credits) + parseInt(cur.wcredits),
        0
      )
  }

  calcPercentage = (credits, totalCredits) => {
    return credits / totalCredits < 1 ? (credits / totalCredits) * 100 : 100
  }

  pickCandidate = classes => {
    const { allClasses, doneClasses } = this.props
    const candidate = doneClasses
      .filter(code => classes.includes(code))
      .map(code => {
        const classe = allClasses.find(classe => classe.code === code)
        return [code, parseInt(classe.credits) + parseInt(classe.wcredits)]
      })
      .reduce(
        (acc, cur) =>
          acc.length > 0 ? (acc[1] > cur[1] && cur[1] >= 4 ? cur : acc) : cur,
        []
      )

    return candidate.length > 0 ? candidate[0] : undefined
  }

  render() {
    const {
      doneClasses,
      mandatoryClasses,
      statisticsClasses,
      scienceClasses,
      freeElectives,
    } = this.props

    const statisticsOptative = this.pickCandidate(statisticsClasses)
    const scienceOptative = this.pickCandidate(scienceClasses)

    const mandatoryCredits = this.mapCredits(
      doneClasses.filter(code => mandatoryClasses.includes(code))
    )
    const freeCredits = this.mapCredits(
      doneClasses.filter(
        code =>
          freeElectives.includes(code) &&
          code !== statisticsOptative &&
          code !== scienceOptative
      )
    )
    const electiveCredits = this.mapCredits(
      doneClasses.filter(
        code =>
          !freeElectives.includes(code) &&
          !mandatoryClasses.includes(code) &&
          code !== statisticsOptative &&
          code !== scienceOptative
      )
    )

    return (
      <React.Fragment>
        <div className="fw6 mb4 f4 mid-gray">Evolução no Curso</div>
        <div className="flex flex-column flex-row-m flex-column-l items-center-m items-start-l justify-start justify-between-m justify-start-l">
          <div className="flex items-center">
            <div className="w-40 w4-m w-40-l mr3">
              <ProgressCircles
                mandatory={this.calcPercentage(mandatoryCredits, 111)}
                elective={this.calcPercentage(electiveCredits, 52)}
                free={this.calcPercentage(freeCredits, 24)}
              />
            </div>
            <div className="flex flex-column">
              <span className="fw6 dark-blue">Obrigatórias</span>
              <span className="fw5 silver mb2">
                <span className="mr1">{mandatoryCredits}</span>/
                <span className="dark-blue ml1">111</span>
              </span>
              <span className="fw6 blue">Eletivas</span>
              <span className="fw5 silver mb2">
                <span className="mr1">{electiveCredits}</span>/
                <span className="blue ml1">52</span>
              </span>
              <span className="fw6 light-blue">Livres</span>
              <span className="fw5 silver mb2">
                <span className="mr1">{freeCredits}</span>/
                <span className="light-blue ml1">24</span>
              </span>
            </div>
          </div>
          <div className="mt4 mt0-m mt4-l fw5">
            <SpecialOptatives
              scienceCompleted={scienceOptative}
              statisticsCompleted={statisticsOptative}
            />
          </div>
          <div className="mt4 mt0-m mt4-l fw5">
            <TrackStatus />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

CreditsManager.propTypes = {
  doneClasses: PropTypes.array.isRequired,
  mandatoryClasses: PropTypes.array.isRequired,
  statisticsClasses: PropTypes.array.isRequired,
  scienceClasses: PropTypes.array.isRequired,
  freeElectives: PropTypes.array.isRequired,
  allClasses: PropTypes.array.isRequired,
}

export default withClasses(withElectives(withEvolution(CreditsManager)))
