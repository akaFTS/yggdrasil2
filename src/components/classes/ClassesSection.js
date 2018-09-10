import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import ClassesBox from './ClassesBox'

class ClassesSection extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: props.shouldStartOpen }
  }

  handleClick = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  render() {
    const { isOpen } = this.state
    const { title, rules, colors } = this.props

    return (
      <article>
        <header
          className={`flex justify-between items-center bg-moon-gray hover-bg-light-silver pointer f4 fw6 tc pa3 mb1 ${
            colors[0]
          }`}
          onClick={this.handleClick}
        >
          <span />
          <span>{title}</span>
          <span className="w1">
            <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronRight} />
          </span>
        </header>
        {isOpen && (
          <main className="flex-l pt3 ph1 ph2-l">
            <div className="w-100 w-50-l ph2 mb4">
              <ClassesBox />
            </div>
            <div className="w-100 w-50-l ph2 mb4" />
          </main>
        )}
      </article>
    )
  }
}

ClassesSection.propTypes = {
  title: PropTypes.string.isRequired,
  rules: PropTypes.object.isRequired,
  colors: PropTypes.array.isRequired,
  shoudStartOpen: PropTypes.bool,
}

export default ClassesSection
