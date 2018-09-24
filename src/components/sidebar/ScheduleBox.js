import React from 'react'
import PropTypes from 'prop-types'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ClasseSlot from '../classes/ClasseSlot'
import CreditsManager from '../credits/CreditsManager'
import CreditsProgress from '../credits/CreditsProgress'
import SpecialOptatives from '../credits/SpecialOptatives'
import TrackStatus from '../credits/TrackStatus'

const ScheduleBox = ({ icon, colors, title, classList, fullClassList }) => {
  const cloneList = [...fullClassList]
  return (
    <div>
      <div className="br4 ba b--moon-gray">
        <header className="fw6 f4 pa3 near-black flex items-center">
          <span className="fa-layers f3 mr2">
            <FontAwesomeIcon icon={faCircle} className={colors.secondary} />
            <FontAwesomeIcon
              icon={icon}
              className="white"
              transform="shrink-7"
            />
          </span>
          <span>{title}</span>
        </header>
        <main className="pa3 pt0 flex flex-wrap">
          {classList.map(code => (
            <ClasseSlot
              key={code}
              code={code}
              color="near-black"
              forceEnabled
            />
          ))}
        </main>
        <div className="fw6 f5 bt b--light-gray pa3">Evolução após cursar</div>
        <main className="pa4 pt0">
          <CreditsManager doneClasses={fullClassList}>
            {({
              scienceOptative,
              statisticsOptative,
              mandatoryCredits,
              electiveCredits,
              freeCredits,
            }) => (
              <div className="flex flex-wrap justify-center items-center">
                <div className="w5 mr3 mv3">
                  <CreditsProgress
                    mandatoryCredits={mandatoryCredits}
                    electiveCredits={electiveCredits}
                    freeCredits={freeCredits}
                    colors={colors}
                  />
                </div>
                <div>
                  <div className="mb4">
                    <SpecialOptatives
                      scienceOptative={scienceOptative}
                      statisticsOptative={statisticsOptative}
                      color={colors.secondary}
                    />
                  </div>
                  <TrackStatus doneClasses={cloneList} />
                </div>
              </div>
            )}
          </CreditsManager>
        </main>
      </div>
      <div className="pv2 bg-moon-gray br--bottom br4 w-90 center" />
    </div>
  )
}

ScheduleBox.propTypes = {
  icon: PropTypes.object.isRequired,
  colors: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  classList: PropTypes.array.isRequired,
  fullClassList: PropTypes.array.isRequired,
}

export default ScheduleBox
