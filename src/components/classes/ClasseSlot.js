import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withEvolution from '../providers/withEvolution'
import withClasses from '../providers/withClasses'
import ClasseModal from './ClasseModal'
import EnabledClasse from './EnabledClasse'
import DisabledClasse from './DisabledClasse'
import { ClasseStatus } from '../../definitions/constants'

class ClasseSlot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
    }
  }

  handleClickAction = () => {
    const { isQuickEditing } = this.props
    isQuickEditing ? this.switchStatus() : this.setState({ isModalOpen: true })
  }

  switchStatus = () => {
    const { getClasseStatus, setClasse, code } = this.props
    const classeStatus = getClasseStatus(code)
    setClasse(
      code,
      classeStatus === ClasseStatus.NOT_DONE
        ? ClasseStatus.DONE
        : classeStatus === ClasseStatus.DONE
          ? ClasseStatus.DOING
          : classeStatus === ClasseStatus.DOING
            ? ClasseStatus.SCHEDULED
            : ClasseStatus.NOT_DONE
    )
  }

  handleCloseModal = () => {
    this.setState({ isModalOpen: false })
  }

  handleClasseSet = status => {
    const { setClasse, code } = this.props
    setClasse(code, status)
  }

  removeClasse = () => {
    const { removeClasse, setClasse, code } = this.props
    //setClasse(code, ClasseStatus.NOT_DONE)
    removeClasse(code)
    this.setState({ isModalOpen: false })
  }

  render() {
    const {
      code,
      color,
      forceEnabled,
      doneClasses,
      getClasseStatus,
      allClasses,
      overrideClick,
    } = this.props

    const { isModalOpen } = this.state
    const classe = allClasses.find(classe => classe.code === code)

    if (!classe) {
      console.warn(
        `Matéria ${code} corrompida, retire do seu arquivo e importe novamente.`
      )
      return null
    }

    const isClasseLocked = !classe.dependencies.reduce((acc, dep) => {
      return acc && doneClasses.some(doneClasse => doneClasse === dep)
    }, true)

    return (
      <React.Fragment>
        {getClasseStatus(code) === ClasseStatus.DONE || forceEnabled ? (
          <EnabledClasse
            classe={classe}
            color={color}
            onClick={overrideClick || this.handleClickAction}
          />
        ) : (
          <DisabledClasse
            classe={classe}
            status={getClasseStatus(code)}
            onClick={this.handleClickAction}
            locked={isClasseLocked}
          />
        )}
        <ClasseModal
          classe={classe}
          color={color}
          isOpen={isModalOpen}
          classeStatus={getClasseStatus(code)}
          onCloseModal={this.handleCloseModal}
          onClasseSet={this.handleClasseSet}
          onClasseRemoved={this.removeClasse}
        />
      </React.Fragment>
    )
  }
}

ClasseSlot.propTypes = {
  code: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  overrideClick: PropTypes.func,
  forceEnabled: PropTypes.bool,
  doneClasses: PropTypes.array.isRequired,
  setClasse: PropTypes.func.isRequired,
  getClasseStatus: PropTypes.func.isRequired,
  allClasses: PropTypes.array.isRequired,
  isQuickEditing: PropTypes.bool.isRequired,
}

export default withClasses(withEvolution(ClasseSlot))
