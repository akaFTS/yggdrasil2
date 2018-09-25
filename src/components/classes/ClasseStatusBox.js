import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ClasseStatusBox = ({
  icon,
  title,
  color,
  currentStatus,
  status,
  onClasseSet,
}) => {
  return (
    <div
      className={`w-50 w-25-ns flex flex-column flex-row-ns items-center justify-center tc pv2 fw5 ${
        currentStatus === status
          ? `bg-${color} white`
          : `bg-light-gray ${color} pointer hover-bg-moon-gray`
      }`}
      onClick={() => (currentStatus !== status ? onClasseSet(status) : null)}
    >
      <FontAwesomeIcon
        icon={icon}
        transform="grow-3"
        className="mr2 mb2 mb0-ns"
      />
      <span>{title}</span>
    </div>
  )
}

ClasseStatusBox.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  currentStatus: PropTypes.number.isRequired,
  status: PropTypes.number.isRequired,
  onClasseSet: PropTypes.func.isRequired,
}

export default ClasseStatusBox
