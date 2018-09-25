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
import ClasseStatusBox from './ClasseStatusBox'

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
              className="mr2 flex-none"
              src={`skills/${classe.code}.gif`}
              onError={e => {
                e.target.src = 'skills/custom.gif'
              }}
              style={{ height: '2.5rem' }}
            />
            <div>
              <div className={`f4 fw5 ${color} pr3`}>{classe.name}</div>
              <div className="f4 fw6 ttu">{classe.code}</div>
            </div>
          </div>
          <div className="f4 mid-gray mh3 mv4">
            Créditos:
            <span className={`fw6 ${color} mh1`}>{classe.credits}</span>+
            <span className="fw6 ml1">{classe.wcredits}</span>
          </div>
          <div className="mb4 flex flex-wrap">
            <ClasseStatusBox
              title="Não Feito"
              icon={faTimes}
              color="dark-red"
              currentStatus={classeStatus}
              status={ClasseStatus.NOT_DONE}
              onClasseSet={onClasseSet}
            />
            <ClasseStatusBox
              title="Agendado"
              icon={faClock}
              color="purple"
              currentStatus={classeStatus}
              status={ClasseStatus.SCHEDULED}
              onClasseSet={onClasseSet}
            />
            <ClasseStatusBox
              title="Cursando"
              icon={faPencilAlt}
              color="gold"
              currentStatus={classeStatus}
              status={ClasseStatus.DOING}
              onClasseSet={onClasseSet}
            />
            <ClasseStatusBox
              title="Feito"
              icon={faCheck}
              color="dark-green"
              currentStatus={classeStatus}
              status={ClasseStatus.DONE}
              onClasseSet={onClasseSet}
            />
          </div>
          <div className="flex justify-end mb4 mh3">
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
