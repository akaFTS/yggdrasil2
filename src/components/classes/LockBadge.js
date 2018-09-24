import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const LockBadge = () => {
  return (
    <span
      className="fa-layers absolute tc"
      style={{ fontSize: '2rem', top: '0.2rem' }}
    >
      <FontAwesomeIcon icon={faLock} className="gray" />
      <div
        className="fa-layers-text bg-light-gray"
        style={{
          height: '0.6rem',
          width: '0.3rem',
          borderRadius: '40%',
          marginTop: '0.4rem',
        }}
      />
    </span>
  )
}

export default LockBadge
