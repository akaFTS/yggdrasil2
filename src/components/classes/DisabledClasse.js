import React from 'react'
import PropTypes from 'prop-types'
import Lock from './Lock'

const DisabledClasse = ({ classe, locked, onClick }) => {
  return (
    <div className="flex-none pa2">
      <div
        className="w4 br4 ba bw1 b--dashed b--moon-gray pa2 flex flex-column items-center hover-bg-light-gray pointer relative"
        onClick={onClick}
      >
        <span className="f7 moon-gray tc lh-title h2 overflow-y-hidden">
          {classe.name}
        </span>
        <div
          className="mv1 flex flex-column items-center relative"
          style={{ height: '2.5rem' }}
        >
          <img
            className="h-100"
            src={`/src/assets/skills/${classe.code}.gif`}
            style={{
              filter: 'grayscale(100%) opacity(20%)',
            }}
          />
          {locked && <Lock />}
        </div>
        <span className={`fw7 f5 light-silver`}>{classe.code}</span>
      </div>
    </div>
  )
}

DisabledClasse.propTypes = {
  classe: PropTypes.object.isRequired,
  locked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default DisabledClasse
