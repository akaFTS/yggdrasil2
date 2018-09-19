import React from 'react'
import PropTypes from 'prop-types'
import CircularProgressbar from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ProgressCircles = ({ mandatory, elective, free }) => {
  return (
    <div className="relative w-100">
      <div>
        <CircularProgressbar
          percentage={mandatory}
          initialAnimation={true}
          styles={{
            trail: { stroke: 'transparent' },
            path: {
              stroke: '#00449E',
            },
          }}
        />
      </div>
      <div className="absolute top-0" style={{ padding: '9.5%' }}>
        <CircularProgressbar
          percentage={elective}
          initialAnimation={true}
          strokeWidth={9}
          styles={{
            trail: { stroke: 'transparent' },
            path: {
              stroke: '#357EDD',
            },
          }}
        />
      </div>
      <div className="absolute top-0" style={{ padding: '18%' }}>
        <CircularProgressbar
          strokeWidth={12}
          percentage={free}
          initialAnimation={true}
          styles={{
            trail: { stroke: 'transparent' },
            path: {
              stroke: '#96CCFF',
            },
          }}
        />
      </div>
    </div>
  )
}

ProgressCircles.propTypes = {
  mandatory: PropTypes.number.isRequired,
  elective: PropTypes.number.isRequired,
  free: PropTypes.number.isRequired,
}

export default ProgressCircles
