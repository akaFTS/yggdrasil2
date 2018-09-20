import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProgressCircles from './ProgressCircles'

class CreditsProgress extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  calcPercentage = (credits, totalCredits) => {
    return credits / totalCredits < 1 ? (credits / totalCredits) * 100 : 100
  }

  render() {
    const { mandatoryCredits, electiveCredits, freeCredits } = this.props
    return (
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
    )
  }
}
CreditsProgress.propTypes = {
  mandatoryCredits: PropTypes.number.isRequired,
  electiveCredits: PropTypes.number.isRequired,
  freeCredits: PropTypes.number.isRequired,
}

export default CreditsProgress
