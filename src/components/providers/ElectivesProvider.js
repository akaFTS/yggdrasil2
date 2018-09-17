import React, { Component } from 'react'
import PropTypes from 'prop-types'
import geral from '../../tracks/geral'

export const ElectivesContext = React.createContext()

class ElectivesProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      freeElectives: JSON.parse(localStorage.getItem('freeElectives')) || [],
      toggleElective: this.toggleElective,
      clearElectives: this.clearElectives,
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      'freeElectives',
      JSON.stringify(this.state.freeElectives)
    )
  }

  clearElectives = () => {
    this.setState({ freeElectives: [] })
    localStorage.clear()
  }

  toggleElective = code => {
    const { freeElectives } = this.state

    this.setState({
      freeElectives: freeElectives.includes(code)
        ? freeElectives.filter(electives => electives !== code)
        : [...freeElectives, code],
    })
  }

  render() {
    const mandatoryClasses = [...geral.boxes.left, ...geral.boxes.right].find(
      box => box.mandatory
    ).classes

    const { children } = this.props
    const ctx = { ...this.state, mandatoryClasses }

    console.log(ctx)

    return (
      <ElectivesContext.Provider value={ctx}>
        {children}
      </ElectivesContext.Provider>
    )
  }
}

ElectivesProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ElectivesProvider
