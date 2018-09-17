import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-responsive-modal'
import Switch from 'react-ios-switch'
import ClasseSlot from './ClasseSlot'
import Button from '../Button'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import ElectiveToggle from './ElectiveToggle'

class ClasseModal extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      classe,
      color,
      isOpen,
      isClasseDone,
      onCloseModal,
      onToggleDone,
      onClasseRemoved,
    } = this.props

    return (
      <Modal
        center
        open={isOpen}
        onClose={onCloseModal}
        classNames={{ modal: 'br4 w-100 w-70-l' }}
      >
        <div className="montserrat">
          <div className="flex items-center mb4">
            <img
              className="mr2"
              src={`skills/${classe.code}.gif`}
              onError={e => {
                e.target.src = 'skills/custom.gif'
              }}
              style={{ height: '2.5rem' }}
            />
            <div>
              <div className={`f4 fw5 ${color}`}>{classe.name}</div>
              <div className="f4 fw6 ttu">{classe.code}</div>
            </div>
          </div>
          <div className="f4 mid-gray mb4">
            Créditos:
            <span className={`fw6 ${color} mh1`}>{classe.credits}</span>+
            <span className="fw6 ml1">{classe.wcredits}</span>
          </div>
          <div className="mb4 flex-l justify-between">
            <div className="mb4 mb0-l flex items-center">
              <Switch
                checked={isClasseDone}
                onChange={onToggleDone}
                onColor="#449d48"
              />
              <span className="f4 ml2 fw5 mid-gray">Feito</span>
            </div>
            <ElectiveToggle code={classe.code} color={color} />
          </div>
          <div className="bt b--moon-gray pv4 lh-title">
            {classe.custom ? (
              <div className="w-100 w-50-l center">
                <Button
                  variation="danger"
                  text="Remover disciplina"
                  onClick={onClasseRemoved}
                  icon={faTrash}
                />
              </div>
            ) : (
              classe.summary.split('\n').map((item, key) => {
                return (
                  <p className="mt0 mb2" key={key}>
                    {item}
                  </p>
                )
              })
            )}
          </div>
          {classe.dependencies.length > 0 && (
            <div className="bt b--moon-gray">
              <div className="mt4 f4 mid-gray">Requisitos</div>
              <div className="flex flex-wrap mt3">
                {classe.dependencies.map(dep => (
                  <ClasseSlot key={dep} code={dep} color={color} />
                ))}
              </div>
            </div>
          )}
        </div>
      </Modal>
    )
  }
}

ClasseModal.propTypes = {
  classe: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isClasseDone: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onClasseRemoved: PropTypes.func.isRequired,
}

export default ClasseModal
