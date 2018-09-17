import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ElectiveToggle extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <span>Oi</span>
  }
}

ElectiveToggle.propTypes = {
  code: PropTypes.string.isRequired,
}

export default ElectiveToggle
