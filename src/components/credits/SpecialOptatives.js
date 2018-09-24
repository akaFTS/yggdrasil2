import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const SpecialOptatives = ({ statisticsOptative, scienceOptative, color }) => {
  const checkColor = color || 'blue'

  return (
    <React.Fragment>
      <div className="flex items-center mb2 fw5">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className={`${statisticsOptative ? checkColor : 'white'} f4 mr2`}
        />
        <span className={statisticsOptative ? 'near-black' : 'moon-gray'}>
          Optativa de Estatística
        </span>
      </div>
      <div className="flex items-center fw5">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className={`${scienceOptative ? checkColor : 'white'} f4 mr2`}
        />
        <span className={scienceOptative ? 'near-black' : 'moon-gray'}>
          Optativa de Ciências
        </span>
      </div>
    </React.Fragment>
  )
}

SpecialOptatives.propTypes = {
  statisticsOptative: PropTypes.string,
  scienceOptative: PropTypes.string,
  color: PropTypes.string,
}

export default SpecialOptatives
