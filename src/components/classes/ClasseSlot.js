import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withEvolution from '../providers/withEvolution'
import withClasses from '../providers/withClasses'
import ClasseModal from './ClasseModal'
import EnabledClasse from './EnabledClasse'
import DisabledClasse from './DisabledClasse'

class ClasseSlot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
    }
  }

  handleClickAction = () => {
    const { isQuickEditing, toggleDone, code } = this.props
    isQuickEditing ? toggleDone(code) : this.setState({ isModalOpen: true })
  }

  handleCloseModal = () => {
    this.setState({ isModalOpen: false })
  }

  handleToggleDone = () => {
    const { toggleDone, code } = this.props
    toggleDone(code)
  }

  removeClasse = () => {
    const { removeClasse, toggleDone, code } = this.props
    removeClasse(code)
    toggleDone(code)
    this.setState({ isModalOpen: false })
  }

  render() {
    const { code, color, doneClasses, allClasses, overrideClick } = this.props
    const { isModalOpen } = this.state
    const isClasseDone = doneClasses.some(classe => classe === code)
    const classe = allClasses.find(classe => classe.code === code)

    const isClasseLocked = !classe.dependencies.reduce((acc, dep) => {
      return acc && doneClasses.some(doneClasse => doneClasse === dep)
    }, true)

    return (
      <React.Fragment>
        {isClasseDone ? (
          <EnabledClasse
            classe={classe}
            color={color}
            onClick={overrideClick || this.handleClickAction}
          />
        ) : (
          <DisabledClasse
            classe={classe}
            onClick={this.handleClickAction}
            locked={isClasseLocked}
          />
        )}
        <ClasseModal
          classe={classe}
          color={color}
          isOpen={isModalOpen}
          isClasseDone={isClasseDone}
          onCloseModal={this.handleCloseModal}
          onToggleDone={this.handleToggleDone}
          onClasseRemoved={this.removeClasse}
        />
      </React.Fragment>
    )
  }
}

ClasseSlot.propTypes = {
  code: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  doneClasses: PropTypes.array.isRequired,
  toggleDone: PropTypes.func.isRequired,
  allClasses: PropTypes.array.isRequired,
  overrideClick: PropTypes.func,
  isQuickEditing: PropTypes.bool.isRequired,
}

export default withClasses(withEvolution(ClasseSlot))
