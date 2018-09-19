import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const SpecialOptatives = ({ statisticsCompleted, scienceCompleted }) => {
  return (
    <React.Fragment>
      <div className="flex items-center mb2">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className={`${statisticsCompleted ? 'blue' : 'white'} f4 mr2`}
        />
        <span className={statisticsCompleted ? 'near-black' : 'moon-gray'}>
          Optativa de Estatística
        </span>
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className={`${scienceCompleted ? 'blue' : 'white'} f4 mr2`}
        />
        <span className={scienceCompleted ? 'near-black' : 'moon-gray'}>
          Optativa de Ciências
        </span>
      </div>
    </React.Fragment>
  )
}

SpecialOptatives.propTypes = {
  statisticsCompleted: PropTypes.bool.isRequired,
  scienceCompleted: PropTypes.bool.isRequired,
}

export default SpecialOptatives
