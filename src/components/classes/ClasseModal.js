import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-responsive-modal'
import Switch from 'react-ios-switch'
import ClasseSlot from './ClasseSlot'
import Button from '../Button'
import {
  faTrash,
  faTimes,
  faClock,
  faPencilAlt,
  faCheck,
} from '@fortawesome/free-solid-svg-icons'
import ElectiveToggle from './ElectiveToggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ClasseStatus } from '../../definitions/constants'

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
      classeStatus,
      onCloseModal,
      onClasseSet,
      onClasseRemoved,
    } = this.props

    return (
      <Modal
        center
        open={isOpen}
        onClose={onCloseModal}
        classNames={{ modal: 'br4 w-100 w-70-l ph0' }}
      >
        <div className="montserrat">
          <div className="flex items-center mb4 mh3">
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
          <div className="f4 mid-gray ma3">
            Créditos:
            <span className={`fw6 ${color} mh1`}>{classe.credits}</span>+
            <span className="fw6 ml1">{classe.wcredits}</span>
          </div>
          <div className="mb3 flex">
            <div
              className={`w-25 tc pv2 fw5 ${
                classeStatus === ClasseStatus.NOT_DONE
                  ? 'bg-dark-red white'
                  : 'bg-light-gray dark-red pointer hover-bg-moon-gray'
              }`}
              onClick={() =>
                classeStatus !== ClasseStatus.NOT_DONE
                  ? onClasseSet(ClasseStatus.NOT_DONE)
                  : null
              }
            >
              <FontAwesomeIcon
                icon={faTimes}
                transform="grow-3"
                className="mr2"
              />
              Não Feito
            </div>
            <div
              className={`w-25 tc pv2 fw5 ${
                classeStatus === ClasseStatus.SCHEDULED
                  ? 'bg-purple white'
                  : 'bg-light-gray purple pointer hover-bg-moon-gray'
              }`}
              onClick={() =>
                classeStatus !== ClasseStatus.SCHEDULED
                  ? onClasseSet(ClasseStatus.SCHEDULED)
                  : null
              }
            >
              <FontAwesomeIcon
                icon={faClock}
                transform="grow-3"
                className="mr2"
              />
              Agendado
            </div>
            <div
              className={`w-25 tc pv2 fw5 ${
                classeStatus === ClasseStatus.DOING
                  ? 'bg-gold white'
                  : 'bg-light-gray gold pointer hover-bg-moon-gray'
              }`}
              onClick={() =>
                classeStatus !== ClasseStatus.DOING
                  ? onClasseSet(ClasseStatus.DOING)
                  : null
              }
            >
              <FontAwesomeIcon
                icon={faPencilAlt}
                transform="grow-3"
                className="mr2"
              />
              Fazendo
            </div>
            <div
              className={`w-25 tc pv2 fw5 ${
                classeStatus === ClasseStatus.DONE
                  ? 'bg-dark-green white'
                  : 'bg-light-gray dark-green pointer hover-bg-moon-gray'
              }`}
              onClick={() =>
                classeStatus !== ClasseStatus.DONE
                  ? onClasseSet(ClasseStatus.DONE)
                  : null
              }
            >
              <FontAwesomeIcon
                icon={faCheck}
                transform="grow-3"
                className="mr2"
              />
              Feito
            </div>
          </div>
          <div className="flex-l justify-end mb4 mh3">
            <ElectiveToggle code={classe.code} color={color} />
          </div>
          <div className="bt b--moon-gray pv4 lh-title mh3">
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
            <div className="bt b--moon-gray mh3">
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
  classeStatus: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onClasseSet: PropTypes.func.isRequired,
  onClasseRemoved: PropTypes.func.isRequired,
}

export default ClasseModal
