import React from 'react'
import PropTypes from 'prop-types'
import withElectives from '../providers/withElectives'
import withEvolution from '../providers/withEvolution'
import CreditsManager from '../credits/CreditsManager'

const ElectiveToggle = ({
  code,
  color,
  mandatoryClasses,
  freeElectives,
  toggleElective,
  doneClasses,
}) => {
  const isFree = freeElectives.includes(code)

  return (
    <CreditsManager doneClasses={doneClasses}>
      {({ statisticsOptative, scienceOptative }) =>
        mandatoryClasses.includes(code) ? (
          <div className="w-100 w5-ns tc ba bw1 b--light-silver br3 ph3 pv1 silver fw5">
            Obrigatória
          </div>
        ) : statisticsOptative === code ? (
          <div className="w-100 w5-ns tc ba bw1 b--light-silver br3 ph3 pv1 silver fw5">
            Optativa de Estatística
          </div>
        ) : scienceOptative === code ? (
          <div className="w-100 w5-ns tc ba bw1 b--light-silver br3 ph3 pv1 silver fw5">
            Optativa de Estatística
          </div>
        ) : (
          <div className="w-100 w5-ns">
            <div className={`ba bw1 b--${color} br3 flex overflow-hidden`}>
              <div
                className={`br b--${color} ph3 pv1 fw5 flex-auto tc ${
                  isFree
                    ? `${color} pointer hover-bg-light-gray`
                    : `white bg-${color}`
                }`}
                onClick={() => (isFree ? toggleElective(code) : null)}
              >
                Eletiva
              </div>
              <div
                className={`bl b--${color} ph3 pv1 fw5 flex-auto tc ${
                  isFree
                    ? `white bg-${color}`
                    : `${color} pointer hover-bg-light-gray`
                }`}
                onClick={() => (isFree ? null : toggleElective(code))}
              >
                Livre
              </div>
            </div>
          </div>
        )
      }
    </CreditsManager>
  )
}

ElectiveToggle.propTypes = {
  code: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  mandatoryClasses: PropTypes.array.isRequired,
  freeElectives: PropTypes.array.isRequired,
  toggleElective: PropTypes.func.isRequired,
  doneClasses: PropTypes.array.isRequired,
}

export default withEvolution(withElectives(ElectiveToggle))
