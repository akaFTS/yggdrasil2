import React, { Component } from 'react'
import PropTypes from 'prop-types'
import allClasses from '../../definitions/allclasses.json'
import withEvolution from '../evolution/withEvolution'
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

  openModal = () => {
    this.setState({ isModalOpen: true })
  }

  handleCloseModal = () => {
    this.setState({ isModalOpen: false })
  }

  handleToggleDone = done => {
    const { doClasse, undoClasse, code } = this.props
    done ? doClasse(code) : undoClasse(code)
  }

  render() {
    const { code, color, doneClasses } = this.props
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
            onClick={this.openModal}
          />
        ) : (
          <DisabledClasse
            classe={classe}
            onClick={this.openModal}
            locked={isClasseLocked}
          />
        )}
        <ClasseModal
          classe={classe}
          color={color}
          isOpen={isModalOpen}
          isClasseDone={isClasseDone}
          handleCloseModal={this.handleCloseModal}
          handleToggleDone={this.handleToggleDone}
        />
      </React.Fragment>
    )
  }
}

ClasseSlot.propTypes = {
  code: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  doneClasses: PropTypes.array.isRequired,
  doClasse: PropTypes.func.isRequired,
  undoClasse: PropTypes.func.isRequired,
}

export default withEvolution(ClasseSlot)
