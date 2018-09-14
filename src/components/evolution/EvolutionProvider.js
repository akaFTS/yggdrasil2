import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const EvolutionContext = React.createContext()

class EvolutionProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doneClasses: JSON.parse(localStorage.getItem('doneClasses')) || [],
      doClasse: this.doClasse,
      undoClasse: this.undoClasse,
    }
  }

  componentDidUpdate() {
    localStorage.setItem('doneClasses', JSON.stringify(this.state.doneClasses))
  }

  doClasse = classe => {
    this.setState(prevState => ({
      doneClasses: [...prevState.doneClasses, classe],
    }))
  }

  undoClasse = classe => {
    const { doneClasses } = this.state
    this.setState(prevState => ({
      doneClasses: doneClasses.filter(doneClasse => doneClasse !== classe),
    }))
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
