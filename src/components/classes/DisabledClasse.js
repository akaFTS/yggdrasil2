import React from 'react'
import PropTypes from 'prop-types'
import LockBadge from './LockBadge'
import { ClasseStatus } from '../../definitions/constants'
import DoingBadge from './DoingBadge'
import ScheduledBadge from './ScheduledBadge'

const DisabledClasse = ({ classe, status, locked, onClick }) => {
  return (
    <div className="flex-none pa1">
      <div
        className="w4 br4 ba bw1 b--dashed b--moon-gray pa2 flex flex-column items-center hover-bg-light-gray pointer relative"
        onClick={onClick}
      >
        <span
          className="f7 light-silver tc lh-title overflow-y-hidden"
          style={{ height: '3rem' }}
        >
          {classe.name}
        </span>
        <div
          className="mv1 flex flex-column items-center relative"
          style={{ height: '2.5rem' }}
        >
          <img
            className="h-100"
            src={`skills/${classe.code}.gif`}
            onError={e => {
              e.target.src = 'skills/custom.gif'
            }}
            style={{
              filter: 'grayscale(100%) opacity(20%)',
            }}
          />
          {locked && <LockBadge />}
          {status === ClasseStatus.DOING ? (
            <DoingBadge />
          ) : status === ClasseStatus.SCHEDULED ? (
            <ScheduledBadge />
          ) : null}
        </div>
        <span className={`fw7 f5 light-silver ttu`}>{classe.code}</span>
      </div>
    </div>
  )
}

DisabledClasse.propTypes = {
  classe: PropTypes.object.isRequired,
  status: PropTypes.number.isRequired,
  locked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default DisabledClasse
