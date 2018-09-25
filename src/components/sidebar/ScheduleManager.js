import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-responsive-modal'
import withEvolution from '../providers/withEvolution'
import Button from '../Button'
import ClasseSlot from '../classes/ClasseSlot'
import {
  faCalendarAlt,
  faPencilAlt,
  faCircle,
  faClock,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CreditsManager from '../credits/CreditsManager'
import CreditsProgress from '../credits/CreditsProgress'
import SpecialOptatives from '../credits/SpecialOptatives'
import TrackStatus from '../credits/TrackStatus'

import ScheduleBox from './ScheduleBox'

class ScheduleManager extends Component {
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
    const { isModalOpen } = this.state
    const { doingClasses, doneClasses, scheduledClasses } = this.props

    return (
      <div>
        <Button
          text="Ver Agenda"
          variation="important"
          icon={faCalendarAlt}
          onClick={this.openModal}
        />
        <Modal
          center
          open={isModalOpen}
          onClose={this.handleCloseModal}
          classNames={{ modal: 'br4 w-100 w-70-l' }}
        >
          <div className="montserrat">
            <div className="f4 fw6 mb4 dark-blue">Minha Agenda</div>
            <div className="mb4">
              <ScheduleBox
                icon={faPencilAlt}
                colors={{
                  primary: 'orange',
                  secondary: 'gold',
                  tertiary: 'yellow',
                }}
                title="Cursando Agora"
                classList={doingClasses}
                fullClassList={[...doneClasses, ...doingClasses]}
              />
            </div>
            <div className="mb4">
              <ScheduleBox
                icon={faClock}
                colors={{
                  primary: 'dark-purple',
                  secondary: 'purple',
                  tertiary: 'light-purple',
                }}
                title="Agendadas"
                classList={scheduledClasses}
                fullClassList={[
                  ...doneClasses,
                  ...doingClasses,
                  ...scheduledClasses,
                ]}
              />
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

ScheduleManager.propTypes = {
  doneClasses: PropTypes.array.isRequired,
  doingClasses: PropTypes.array.isRequired,
  scheduledClasses: PropTypes.array.isRequired,
}

export default withEvolution(ScheduleManager)
