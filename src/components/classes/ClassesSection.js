import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import ClassesBox from './ClassesBox'

class ClassesSection extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  handleClick = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  render() {
    const { isOpen } = this.state

    return (
      <article>
        <header
          className="flex justify-between items-center bg-moon-gray hover-bg-light-silver pointer dark-gray f4 fw6 tc pa3 mb1"
          onClick={this.handleClick}
        >
          <span />
          <span>Curso Básico</span>
          <span className="w1">
            <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronRight} />
          </span>
        </header>
        {isOpen && (
          <main className="flex-l pt4 ph1 ph3-l">
            <div className="w-100 w-50-l ph3 mb4">
              <ClassesBox />
            </div>
            <div className="w-100 w-50-l ph3 mb4" />
          </main>
        )}
      </article>
    )
  }
}

export default ClassesSection
