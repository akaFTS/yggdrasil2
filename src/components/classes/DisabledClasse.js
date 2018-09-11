import React from 'react'
import PropTypes from 'prop-types'

const DisabledClasse = ({ classe, color, onClick }) => {
  return (
    <div className="flex-none pa2">
      <div
        className="w4 br4 ba bw1 b--dashed b--moon-gray pa2 flex flex-column items-center hover-bg-light-gray pointer"
        onClick={onClick}
      >
        <span className="f7 moon-gray tc lh-title h2 overflow-y-hidden">
          {classe.name}
        </span>
        <img
          className="mv1"
          src={`/src/assets/skills/${classe.code}.gif`}
          style={{
            height: '2.5rem',
            filter: 'grayscale(100%) opacity(20%)',
          }}
        />
        <span className={`fw7 f5 light-silver`}>{classe.code}</span>
      </div>
    </div>
  )
}

DisabledClasse.propTypes = {
  classe: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default DisabledClasse
