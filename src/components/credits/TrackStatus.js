import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import withClasses from '../providers/withClasses'
import teoria from '../../tracks/teoria'
import sistemas from '../../tracks/sistemas'
import escience from '../../tracks/escience'
import ia from '../../tracks/ia'
import { validateTrack } from '../../definitions/validation'

const TrackStatus = ({ doneClasses, customBoxClasses }) => {
  const validTeoria = validateTrack(teoria, doneClasses, customBoxClasses)
  const validSistemas = validateTrack(sistemas, doneClasses, customBoxClasses)
  const validEscience = validateTrack(escience, doneClasses, customBoxClasses)
  const validIa = validateTrack(ia, doneClasses, customBoxClasses)

  return (
    <React.Fragment>
      <div className="flex items-center mb2 fw5">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className={`${validSistemas ? 'green' : 'white'} f4 mr2`}
        />
        <span className={validSistemas ? 'near-black' : 'moon-gray'}>
          Sistemas de Software
        </span>
      </div>
      <div className="flex items-center mb2 fw5">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className={`${validIa ? 'hot-pink' : 'white'} f4 mr2`}
        />
        <span className={validIa ? 'near-black' : 'moon-gray'}>
          Inteligência Artificial
        </span>
      </div>
      <div className="flex items-center mb2 fw5">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className={`${validEscience ? 'orange' : 'white'} f4 mr2`}
        />
        <span className={validEscience ? 'near-black' : 'moon-gray'}>
          E-Science
        </span>
      </div>
      <div className="flex items-center fw5">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className={`${validTeoria ? 'red' : 'white'} f4 mr2`}
        />
        <span className={validTeoria ? 'near-black' : 'moon-gray'}>
          Teoria da Computação
        </span>
      </div>
    </React.Fragment>
  )
}

TrackStatus.propTypes = {
  doneClasses: PropTypes.array.isRequired,
  customBoxClasses: PropTypes.object.isRequired,
}

export default withClasses(TrackStatus)
