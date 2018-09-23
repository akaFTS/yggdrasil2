import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import ClassesBox from './ClassesBox'
import withEvolution from '../providers/withEvolution'

class Track extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: props.shouldStartOpen }
  }

  handleClick = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  render() {
    const { isOpen } = this.state
    const { title, rules, colors, isQuickEditing } = this.props

    return (
      <article>
        <header
          className={`flex justify-between items-center bg-moon-gray hover-bg-light-silver pointer f4 fw6 tc pa3 mb1 ${
            colors[0]
          }`}
          style={{ height: '3rem' }}
          onClick={this.handleClick}
        >
          <span />
          <span>{title}</span>
          <span className="w1">
            <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronRight} />
          </span>
        </header>
        {isOpen && (
          <main
            className="flex-l flex-wrap pt3 ph1 ph2-l mb1"
            style={{ backgroundColor: isQuickEditing ? '#D1C4E9' : '' }}
          >
            {rules.description && (
              <div className="w-100 ph2 mt3 mb4 tc fw5 mid-gray f5 lh-copy">
                {rules.description}
              </div>
            )}
            <div className="w-100 w-50-l ph2 mb4">
              {rules.boxes.left.map(box => (
                <ClassesBox key={box.title} box={box} colors={colors} />
              ))}
            </div>
            <div className="w-100 w-50-l ph2 mb4">
              {rules.boxes.right.map(box => (
                <ClassesBox key={box.title} box={box} colors={colors} />
              ))}
            </div>
          </main>
        )}
      </article>
    )
  }
}

Track.propTypes = {
  title: PropTypes.string.isRequired,
  rules: PropTypes.object.isRequired,
  colors: PropTypes.array.isRequired,
  shoudStartOpen: PropTypes.bool,
  isQuickEditing: PropTypes.bool.isRequired,
}

export default withEvolution(Track)
