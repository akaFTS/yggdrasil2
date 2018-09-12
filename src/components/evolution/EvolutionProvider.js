import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const EvolutionContext = React.createContext()

class EvolutionProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doneClasses: [],
      doClasse: this.doClasse,
      undoClasse: this.undoClasse,
    }
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
