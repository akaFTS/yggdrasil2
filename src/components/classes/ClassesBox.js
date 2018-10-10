import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClasseSlot from './ClasseSlot'
import withEvolution from '../providers/withEvolution'
import { BoxTypes } from '../../definitions/constants'
import { validateBox } from '../../definitions/validation'
import ClasseAdder from './ClasseAdder'
import withClasses from '../providers/withClasses'

class ClassesBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowingInfo: false,
    }
  }

  toggleInfo = () => {
    this.setState(prevState => ({ isShowingInfo: !prevState.isShowingInfo }))
  }

  render() {
    const { box, doneClasses, colors, customBoxClasses } = this.props
    const { isShowingInfo } = this.state

    const boxClasses =
      box.addable && customBoxClasses[box.addingId]
        ? [...box.classes, ...customBoxClasses[box.addingId]]
        : box.classes

    const isBoxComplete = validateBox(box, doneClasses, customBoxClasses)
    const primaryColor = isBoxComplete ? colors[0] : 'mid-gray'
    const secondaryColor = isBoxComplete ? colors[1] : 'bg-light-silver'
    const completedClasses = boxClasses.reduce(
      (acc, cur) => (doneClasses.includes(cur) ? acc + 1 : acc),
      0
    )

    return (
      <div className="mb4 flex flex-column items-center">
        <article className="bg-white br4 w-100">
          <header className="fw6 f4 pa3 pb2 flex justify-between">
            <span>
              <span className={primaryColor}>{box.title}</span>
              {box.type !== BoxTypes.FREE && (
                <span className="ml2 f5 mid-gray">
                  (<span className="mh1">{completedClasses}</span>/
                  <span className={`${colors[0]} mh1`}>
                    {box.minimum || boxClasses.length}
                  </span>
                  )
                </span>
              )}
            </span>
          </header>
          <main className="pa3 pt2 flex flex-wrap">
            {boxClasses.map(code => (
              <ClasseSlot key={code} code={code} color={colors[0]} />
            ))}
            {box.addable && (
              <ClasseAdder addingId={box.addingId} extraText={box.addingInfo} />
            )}
          </main>
        </article>
        <div className={`pv2 ${secondaryColor} br--bottom br4 w-90`} />
      </div>
    )
  }
}

ClassesBox.propTypes = {
  colors: PropTypes.array.isRequired,
  box: PropTypes.object.isRequired,
  doneClasses: PropTypes.array.isRequired,
  customBoxClasses: PropTypes.object.isRequired,
}

export default withClasses(withEvolution(ClassesBox))
