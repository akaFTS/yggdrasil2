import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faClock } from '@fortawesome/free-solid-svg-icons'

const ScheduledBadge = () => {
  return (
    <span
      className="fa-layers absolute tc"
      style={{ fontSize: '2rem', top: '0.2rem' }}
    >
      <FontAwesomeIcon icon={faCircle} className="purple" />
      <FontAwesomeIcon icon={faClock} className="white" transform="shrink-7" />
    </span>
  )
}

export default ScheduledBadge
