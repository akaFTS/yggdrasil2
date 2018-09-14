import React from 'react'
import PropTypes from 'prop-types'
import ClasseSlot from './ClasseSlot'
import withEvolution from '../evolution/withEvolution'
import BoxTypes from '../../definitions/BoxTypes'
import { validateBox } from '../../definitions/validation'

const ClassesBox = ({ box, doneClasses, colors, forceCompletion }) => {
  const isBoxComplete = validateBox(box, doneClasses) || forceCompletion
  const primaryColor = isBoxComplete ? colors[0] : 'mid-gray'
  const secondaryColor = isBoxComplete ? colors[1] : 'bg-light-silver'
  const completedClasses = box.classes.reduce(
    (acc, cur) => (doneClasses.includes(cur) ? acc + 1 : acc),
    0
  )

  return (
    <div className="mb4 flex flex-column items-center">
      <article className="bg-white br4 w-100">
        <header className="fw6 f4 pa3">
          <span className={primaryColor}>{box.title}</span>
          {box.type === BoxTypes.COMPLETE_SOME && (
            <span className="ml2 f5 mid-gray">
              (<span className="mh1">{completedClasses}</span>/
              <span className={`${colors[0]} mh1`}>{box.minimum}</span>)
            </span>
          )}
        </header>
        <main className="pa3 pt0 flex flex-wrap">
          {box.classes.map(code => (
            <ClasseSlot key={code} code={code} color={colors[0]} />
          ))}
        </main>
      </article>
      <div className={`pv2 ${secondaryColor} br--bottom br4 w-90 mh-auto`} />
    </div>
  )
}

ClassesBox.propTypes = {
  colors: PropTypes.array.isRequired,
  box: PropTypes.object.isRequired,
  doneClasses: PropTypes.array.isRequired,
  forceCompletion: PropTypes.bool,
}

export default withEvolution(ClassesBox)
