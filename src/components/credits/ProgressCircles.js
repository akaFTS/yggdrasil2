import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';

const palettes = {
  blue: {
    primary: '#00449E',
    secondary: '#357EDD',
    tertiary: '#96CCFF',
  },
  gold: {
    primary: '#FF6300',
    secondary: '#FFB700',
    tertiary: '#FFD700',
  },
  purple: {
    primary: '#311B92',
    secondary: '#5E2CA5',
    tertiary: '#A463F2',
  },
};

const ProgressCircles = ({ mandatory, elective, free, palette }) => {
  const colorPalette = palette ? palettes[palette] : palettes.blue;

  return (
    <div className="relative w-100">
      <div>
        <CircularProgressbar
          percentage={mandatory}
          initialAnimation={true}
          styles={{
            trail: { stroke: 'transparent' },
            path: {
              stroke: colorPalette.primary,
            },
          }}
        />
      </div>
      <div className="absolute top-0 z-1" style={{ padding: '9.5%' }}>
        <CircularProgressbar
          percentage={elective}
          initialAnimation={true}
          strokeWidth={9}
          styles={{
            trail: { stroke: 'transparent' },
            path: {
              stroke: colorPalette.secondary,
            },
          }}
        />
      </div>
      <div className="absolute top-0 z-1" style={{ padding: '18%' }}>
        <CircularProgressbar
          strokeWidth={12}
          percentage={free}
          initialAnimation={true}
          styles={{
            trail: { stroke: 'transparent' },
            path: {
              stroke: colorPalette.tertiary,
            },
          }}
        />
      </div>
    </div>
  );
};

ProgressCircles.propTypes = {
  mandatory: PropTypes.number.isRequired,
  elective: PropTypes.number.isRequired,
  free: PropTypes.number.isRequired,
  palette: PropTypes.string,
};

export default ProgressCircles;
