import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faCircle } from '@fortawesome/free-solid-svg-icons'

const DoingBadge = () => {
  return (
    <span
      className="fa-layers absolute tc"
      style={{ fontSize: '2rem', top: '0.2rem' }}
    >
      <FontAwesomeIcon icon={faCircle} className="gold" />
      <FontAwesomeIcon
        icon={faPencilAlt}
        className="white"
        transform="shrink-7"
      />
    </span>
  )
}

export default DoingBadge
