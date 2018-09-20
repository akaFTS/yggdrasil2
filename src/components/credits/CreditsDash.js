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
          <div className="flex flex-column flex-row-m flex-column-l items-center-m items-start-l justify-start justify-between-m justify-start-l">
            <CreditsProgress
              mandatoryCredits={mandatoryCredits}
              electiveCredits={electiveCredits}
              freeCredits={freeCredits}
            />
            <div className="mt4 mt0-m mt4-l fw5">
              <SpecialOptatives
                scienceCompleted={scienceOptative}
                statisticsCompleted={statisticsOptative}
              />
            </div>
            <div className="mt4 mt0-m mt4-l fw5">
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
