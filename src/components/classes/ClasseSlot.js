import React, { Component } from 'react'
import PropTypes from 'prop-types'
import allClasses from '../../tracks/allclasses'
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

  render() {
    const { code, color } = this.props
    const { isModalOpen } = this.state
    const classe = allClasses.find(classe => classe.code === code)

    return (
      <React.Fragment>
        <DisabledClasse
          classe={classe}
          color={color}
          onClick={this.openModal}
        />
        <ClasseModal
          classe={classe}
          color={color}
          isOpen={isModalOpen}
          handleCloseModal={this.handleCloseModal}
        />
      </React.Fragment>
    )
  }
}

ClasseSlot.propTypes = {
  code: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default ClasseSlot
