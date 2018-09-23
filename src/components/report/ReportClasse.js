import React from 'react'
import PropTypes from 'prop-types'
import withClasses from '../providers/withClasses'

const Report = ({ code, allClasses }) => {
  const classe = allClasses.find(classe => classe.code === code)
  return (
    <div className="ba pa3 w4 tc">
      <div className="f6 b">{classe.code}</div>
      <div className="f6 mt1">
        <span>{classe.credits}</span>+<span>{classe.wcredits}</span>
      </div>
    </div>
  )
}

Report.propTypes = {
  code: PropTypes.string.isRequired,
  allClasses: PropTypes.array.isRequired,
}

export default withClasses(Report)
