import React, { Component } from 'react'
import PropTypes from 'prop-types'
import allClasses from '../../definitions/allclasses.json'

export const ClassesContext = React.createContext()

class ClassesProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customClasses: JSON.parse(localStorage.getItem('customClasses')) || {},
      customCredits: JSON.parse(localStorage.getItem('customCredits')) || [],
      addClasse: this.addClasse,
      removeClasse: this.removeClasse,
      clearCustom: this.clearCustom,
      importClasses: this.importClasses,
      exportClasses: this.exportClasses,
      setCredits: this.setCredits,
      resetCredits: this.resetCredits,
    }
  }

  componentDidUpdate() {
    const { customClasses, customCredits } = this.state
    localStorage.setItem('customClasses', JSON.stringify(customClasses))
    localStorage.setItem('customCredits', JSON.stringify(customCredits))
  }

  exportClasses = () => {
    const { customClasses, customCredits } = this.state
    return { customClasses, customCredits }
  }

  importClasses = classes => {
    classes.customClasses
      ? this.setState({
          customClasses: classes.customClasses,
          customCredits: classes.customCredits,
        })
      : this.setState({ customClasses: classes, customCredits: [] })
  }

  clearCustom = () => {
    this.setState({ customClasses: {} })
    localStorage.clear()
  }

  setCredits = (code, credits, wcredits) => {
    const { customCredits } = this.state
    const filteredCustomCredits = customCredits.filter(cc => cc.code !== code)

    const targetClasse = allClasses.find(classe => classe.code === code)
    const isAltered =
      targetClasse.credits !== credits || targetClasse.wcredits !== wcredits

    this.setState({
      customCredits: isAltered
        ? [...filteredCustomCredits, { code, credits, wcredits }]
        : filteredCustomCredits,
    })
  }

  resetCredits = code => {
    this.setState(prevState => ({
      customCredits: prevState.customCredits.filter(cc => cc.code !== code),
    }))
  }

  addClasse = (classe, box) => {
    if (
      this.getFullClassesList().some(
        fullClasse => classe.code === fullClasse.code
      )
    )
      return

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

  getFullClassesList = () => {
    const { customClasses, customCredits } = this.state

    console.log(customClasses)

    const fullClasses = Object.keys(customClasses)
      .reduce((acc, cur) => [...acc, ...customClasses[cur]], [])
      .filter(classe => !allClasses.some(cl => cl.code === classe.code))
      .concat(allClasses)

    console.log(fullClasses)

    return fullClasses.map(classe => {
      const customCred = customCredits.find(cc => cc.code === classe.code)
      return customCred
        ? {
            ...classe,
            credits: customCred.credits,
            wcredits: customCred.wcredits,
            oldCredits: classe.credits,
            oldWCredits: classe.wcredits,
            creditsChanged: true,
          }
        : classe
    })
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
      setCredits,
      resetCredits,
    } = this.state

    const baseAndCustomClasses = this.getFullClassesList()

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
      setCredits,
      resetCredits,
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
