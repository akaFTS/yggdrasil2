import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-responsive-modal'
import withEvolution from '../providers/withEvolution'
import withElectives from '../providers/withElectives'
import Button from '../Button'
import ClasseSlot from '../classes/ClasseSlot'
import CreditsManager from '../credits/CreditsManager'

class ElectivesManager extends Component {
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
    const {
      doneClasses,
      doingClasses,
      scheduledClasses,
      mandatoryClasses,
      freeElectives,
      toggleElective,
    } = this.props

    const availableClasses = [
      ...doneClasses,
      ...doingClasses,
      ...scheduledClasses,
    ]

    const pickableElectives = availableClasses
      .filter(
        classe =>
          !mandatoryClasses.includes(classe) && !freeElectives.includes(classe)
      )
      .sort()

    const pickableFreeElectives = availableClasses
      .filter(classe => freeElectives.includes(classe))
      .sort()

    return (
      <div>
        <Button text="Gerenciar Optativas Livres" onClick={this.openModal} />
        <Modal
          center
          open={isModalOpen}
          onClose={this.handleCloseModal}
          classNames={{ modal: 'br4 w-100 w-70-l' }}
        >
          <div className="montserrat">
            <CreditsManager doneClasses={doneClasses}>
              {({ statisticsOptative, scienceOptative }) => (
                <React.Fragment>
                  <div className="f4 fw6 mb4 dark-blue">
                    Gerenciar Optativas
                  </div>
                  <div className="gray tc fw5 mb4">
                    Clique em uma matéria para alterná-la entre optativa eletiva
                    e livre.
                  </div>
                  <div className="br4 ba b--moon-gray">
                    <header className="fw6 f5 pa3 near-black">Eletivas</header>
                    <main className="pa3 pt0 flex flex-wrap">
                      {pickableElectives
                        .filter(
                          code =>
                            code !== scienceOptative &&
                            code !== statisticsOptative
                        )
                        .map(code => (
                          <ClasseSlot
                            key={code}
                            code={code}
                            color="dark-blue"
                            overrideClick={() => toggleElective(code)}
                            forceEnabled
                          />
                        ))}
                    </main>
                  </div>
                  <div className="pv2 bg-moon-gray br--bottom br4 w-90 center mb4" />
                  <div className="br4 ba b--moon-gray">
                    <header className="fw6 f5 pa3 near-black">Livres</header>
                    <main className="pa3 pt0 flex flex-wrap">
                      {pickableFreeElectives
                        .filter(
                          code =>
                            code !== scienceOptative &&
                            code !== statisticsOptative
                        )
                        .map(code => (
                          <ClasseSlot
                            key={code}
                            code={code}
                            color="dark-blue"
                            overrideClick={() => toggleElective(code)}
                            forceEnabled
                          />
                        ))}
                    </main>
                  </div>
                  <div className="pv2 bg-moon-gray br--bottom br4 w-90 center mb4" />
                </React.Fragment>
              )}
            </CreditsManager>
          </div>
        </Modal>
      </div>
    )
  }
}

ElectivesManager.propTypes = {
  freeElectives: PropTypes.array.isRequired,
  toggleElective: PropTypes.func.isRequired,
  mandatoryClasses: PropTypes.array.isRequired,
  doneClasses: PropTypes.array.isRequired,
  doingClasses: PropTypes.array.isRequired,
  scheduledClasses: PropTypes.array.isRequired,
}

export default withElectives(withEvolution(ElectivesManager))
