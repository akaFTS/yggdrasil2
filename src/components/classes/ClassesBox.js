import React from 'react'
import PropTypes from 'prop-types'
import ClasseSlot from './ClasseSlot'

const ClassesBox = ({ title, classes, colors }) => {
  return (
    <div className="mb4 flex flex-column items-center">
      <article className="bg-white br4 w-100">
        <header className={`${colors[0]} fw6 f4 pa3`}>{title}</header>
        <main className="pa3 pt0 flex flex-wrap">
          {classes.map(code => (
            <ClasseSlot key={code} code={code} color={colors[0]} />
          ))}
        </main>
      </article>
      <div className={`pv2 ${colors[1]} br--bottom br4 w-90 mh-auto`} />
    </div>
  )
}

ClassesBox.propTypes = {
  colors: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  classes: PropTypes.array.isRequired,
}

export default ClassesBox
