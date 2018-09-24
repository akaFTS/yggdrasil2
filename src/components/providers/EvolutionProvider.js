import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ClasseStatus } from '../../definitions/constants'

export const EvolutionContext = React.createContext()

class EvolutionProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doneClasses: JSON.parse(localStorage.getItem('doneClasses')) || [],
      doingClasses: JSON.parse(localStorage.getItem('doingClasses')) || [],
      scheduledClasses:
        JSON.parse(localStorage.getItem('scheduledClasses')) || [],
      setClasse: this.setClasse,
      getClasseStatus: this.getClasseStatus,
      clearEvolution: this.clearEvolution,
      isQuickEditing: false,
      toggleQuickEdition: this.toggleQuickEdition,
      importEvolution: this.importEvolution,
      exportEvolution: this.exportEvolution,
    }
  }

  componentDidUpdate() {
    localStorage.setItem('doneClasses', JSON.stringify(this.state.doneClasses))
    localStorage.setItem(
      'doingClasses',
      JSON.stringify(this.state.doingClasses)
    )
    localStorage.setItem(
      'scheduledClasses',
      JSON.stringify(this.state.scheduledClasses)
    )
  }

  clearEvolution = () => {
    this.setState({ doneClasses: [], doingClasses: [], scheduledClasses: [] })
    localStorage.clear()
  }

  importEvolution = evolution => {
    this.setState({
      doneClasses: evolution.doneClasses,
      doingClasses: evolution.doingClasses,
      scheduledClasses: evolution.scheduledClasses,
    })
  }

  exportEvolution = () => {
    const { doneClasses, doingClasses, scheduledClasses } = this.state
    return { doneClasses, doingClasses, scheduledClasses }
  }

  toggleQuickEdition = () => {
    this.setState(prevState => ({
      isQuickEditing: !prevState.isQuickEditing,
    }))
  }

  setClasse = (code, status) => {
    const { doneClasses, doingClasses, scheduledClasses } = this.state
    this.setState({
      doneClasses:
        status === ClasseStatus.DONE
          ? [...doneClasses, code]
          : doneClasses.filter(classe => classe !== code),
      doingClasses:
        status === ClasseStatus.DOING
          ? [...doingClasses, code]
          : doingClasses.filter(classe => classe !== code),
      scheduledClasses:
        status === ClasseStatus.SCHEDULED
          ? [...scheduledClasses, code]
          : scheduledClasses.filter(classe => classe !== code),
    })
  }

  getClasseStatus = classe => {
    const { doneClasses, doingClasses, scheduledClasses } = this.state
    return doneClasses.some(done => classe === done)
      ? ClasseStatus.DONE
      : doingClasses.some(doing => doing === classe)
        ? ClasseStatus.DOING
        : scheduledClasses.some(scheduled => scheduled === classe)
          ? ClasseStatus.SCHEDULED
          : ClasseStatus.NOT_DONE
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
