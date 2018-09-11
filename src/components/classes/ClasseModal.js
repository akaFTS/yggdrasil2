import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from '@vtex/styleguide/lib/Modal'

class ClasseModal extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { classe, color, isOpen, handleCloseModal } = this.props

    return (
      <Modal centered isOpen={isOpen} onClose={handleCloseModal}>
        <div className="montserrat">
          <div className={`f4 fw5 ${color}`}>{classe.name}</div>
          <div className="f4 fw6 mb3">{classe.code}</div>
          <div className="f4 mid-gray mb4">
            Créditos:
            <span className={`fw6 ${color} mh1`}>{classe.credits}</span>+
            <span className="fw6 ml1">{classe.wcredits}</span>
          </div>
          <div className="bt b--light-silver pt4">{classe.summary}</div>
        </div>
      </Modal>
    )
  }
}

ClasseModal.propTypes = {
  classe: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
}

export default ClasseModal
