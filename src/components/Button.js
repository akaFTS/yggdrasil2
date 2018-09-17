import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHovering: false,
    }
  }

  startHovering = () => this.setState({ isHovering: true })
  endHovering = () => this.setState({ isHovering: false })

  render() {
    const { icon, onClick, text, variation } = this.props
    const { isHovering } = this.state

    const colors =
      variation === 'danger'
        ? { primary: 'dark-red', secondary: 'washed-red', hover: 'light-red' }
        : {
            primary: 'dark-blue',
            secondary: 'lightest-blue',
            hover: 'light-blue',
          }

    return (
      <button
        className={`db w-100 b--solid bw2 br3 fw6 pv2 ph2 f5 bg-${
          colors.secondary
        } ${colors.primary} hover-bg-${colors.hover} pointer ${
          isHovering ? `b--${colors.hover}` : `b--${colors.secondary}`
        }`}
        onClick={onClick}
        onMouseEnter={this.startHovering}
        onMouseLeave={this.endHovering}
      >
        <FontAwesomeIcon icon={icon} className="mr2" />
        <span>{text}</span>
      </button>
    )
  }
}

Button.propTypes = {
  icon: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  variation: PropTypes.string,
}

export default Button
