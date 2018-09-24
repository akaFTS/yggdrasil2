import React, { Component } from 'react'
import PropTypes from 'prop-types'
import allClasses from '../../definitions/allclasses.json'

export const ClassesContext = React.createContext()

class ClassesProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customClasses: JSON.parse(localStorage.getItem('customClasses')) || {},
      addClasse: this.addClasse,
      removeClasse: this.removeClasse,
      clearCustom: this.clearCustom,
      importClasses: this.importClasses,
      exportClasses: this.exportClasses,
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      'customClasses',
      JSON.stringify(this.state.customClasses)
    )
  }

  exportClasses = () => {
    const { customClasses } = this.state
    return customClasses
  }

  importClasses = customClasses => {
    this.setState({ customClasses })
  }

  clearCustom = () => {
    this.setState({ customClasses: {} })
    localStorage.clear()
  }

  addClasse = (classe, box) => {
    const { customClasses } = this.state
    const updatedClasses = customClasses[box]
      ? {
          ...customClasses,
          [box]: [
            ...customClasses[box],
            { ...classe, custom: true, dependencies: [], summary: '' },
          ],
        }
      : {
          ...customClasses,
          [box]: [{ ...classe, custom: true, dependencies: [], summary: '' }],
        }

    this.setState({ customClasses: updatedClasses })
  }

  removeClasse = code => {
    const { customClasses } = this.state
    const updatedClasses = Object.keys(customClasses).reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: customClasses[cur].filter(classe => classe.code !== code),
      }),
      {}
    )
    this.setState({ customClasses: updatedClasses })
  }

  render() {
    const { children } = this.props
    const {
      customClasses,
      addClasse,
      removeClasse,
      clearCustom,
      importClasses,
      exportClasses,
    } = this.state

    const baseAndCustomClasses = Object.keys(customClasses).reduce(
      (acc, cur) => [...acc, ...customClasses[cur]],
      allClasses
    )

    const customBoxClasses = Object.keys(customClasses).reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: customClasses[cur].map(classe => classe.code),
      }),
      {}
    )
    const ctx = {
      allClasses: baseAndCustomClasses,
      customBoxClasses,
      addClasse,
      removeClasse,
      clearCustom,
      importClasses,
      exportClasses,
    }
    return (
      <ClassesContext.Provider value={ctx}>{children}</ClassesContext.Provider>
    )
  }
}

ClassesProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ClassesProvider
