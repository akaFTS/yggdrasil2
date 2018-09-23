import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const EvolutionContext = React.createContext()

class EvolutionProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doneClasses: JSON.parse(localStorage.getItem('doneClasses')) || [],
      toggleDone: this.toggleDone,
      clearDone: this.clearDone,
      isQuickEditing: false,
      toggleQuickEdition: this.toggleQuickEdition,
    }
  }

  componentDidUpdate() {
    localStorage.setItem('doneClasses', JSON.stringify(this.state.doneClasses))
  }

  clearDone = () => {
    this.setState({ doneClasses: [] })
    localStorage.clear()
  }

  toggleQuickEdition = () => {
    this.setState(prevState => ({
      isQuickEditing: !prevState.isQuickEditing,
    }))
  }

  toggleDone = classe => {
    const { doneClasses } = this.state
    const newDoneClasses = doneClasses.some(doneClasse => doneClasse === classe)
      ? doneClasses.filter(doneClasse => doneClasse !== classe)
      : [...doneClasses, classe]

    this.setState({
      doneClasses: newDoneClasses,
    })
  }

  render() {
    const { children } = this.props
    return (
      <EvolutionContext.Provider value={this.state}>
        {children}
      </EvolutionContext.Provider>
    )
  }
}

EvolutionProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default EvolutionProvider
