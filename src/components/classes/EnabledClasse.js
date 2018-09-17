import React from 'react'
import PropTypes from 'prop-types'

const EnabledClasse = ({ classe, color, onClick }) => {
  return (
    <div className="flex-none pa1">
      <div
        className="w4 br4 ba bw1 b--transparent pa2 flex flex-column items-center hover-bg-light-gray pointer"
        onClick={onClick}
      >
        <span
          className="f7 gray tc lh-title overflow-y-hidden"
          style={{ height: '3rem' }}
        >
          {classe.name}
        </span>
        <img
          className="mv1"
          src={`skills/${classe.code}.gif`}
          onError={e => {
            e.target.src = 'skills/custom.gif'
          }}
          style={{ height: '2.5rem' }}
        />
        <span className={`fw7 f5 ${color} ttu`}>{classe.code}</span>
      </div>
    </div>
  )
}

EnabledClasse.propTypes = {
  classe: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default EnabledClasse
