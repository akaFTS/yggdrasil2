import React from 'react'
import PropTypes from 'prop-types'
import SpecialOptatives from './SpecialOptatives'
import withEvolution from '../providers/withEvolution'
import TrackStatus from './TrackStatus'
import CreditsProgress from './CreditsProgress'
import CreditsManager from './CreditsManager'

const CreditsDash = ({ doneClasses }) => {
  const doneCopy = [...doneClasses]
  return (
    <CreditsManager doneClasses={doneClasses}>
      {({
        scienceOptative,
        statisticsOptative,
        mandatoryCredits,
        electiveCredits,
        freeCredits,
      }) => (
        <div>
          <div className="fw6 mb4 f4 mid-gray">Evolução no Curso</div>
          <div className="flex flex-column flex-wrap flex-row-m flex-column-l items-center-m items-start-l justify-start justify-between-m justify-start-l">
            <div className="mb4 mb0-l">
              <CreditsProgress
                mandatoryCredits={mandatoryCredits}
                electiveCredits={electiveCredits}
                freeCredits={freeCredits}
              />
            </div>
            <div className="mt4 mt0-m mt4-l">
              <SpecialOptatives
                scienceOptative={scienceOptative}
                statisticsOptative={statisticsOptative}
              />
            </div>
            <div className="mt4 mt0-m mt4-l">
              <TrackStatus doneClasses={doneCopy} />
            </div>
          </div>
        </div>
      )}
    </CreditsManager>
  )
}

CreditsDash.propTypes = {
  doneClasses: PropTypes.array.isRequired,
}

export default withEvolution(CreditsDash)
