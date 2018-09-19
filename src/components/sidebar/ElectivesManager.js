import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-responsive-modal'
import withEvolution from '../providers/withEvolution'
import withElectives from '../providers/withElectives'
import Button from '../Button'
import ClasseSlot from '../classes/ClasseSlot'

class ClasseAdder extends Component {
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
      mandatoryClasses,
      freeElectives,
      toggleElective,
    } = this.props
    const doneElectives = doneClasses.filter(
      classe =>
        !mandatoryClasses.includes(classe) && !freeElectives.includes(classe)
    )
    const doneFreeElectives = doneClasses.filter(classe =>
      freeElectives.includes(classe)
    )

    return (
      <div className="pa1">
        <Button text="Gerenciar Optativas" onClick={this.openModal} />
        <Modal
          center
          open={isModalOpen}
          onClose={this.handleCloseModal}
          classNames={{ modal: 'br4 w-100 w-70-l' }}
        >
          <div className="montserrat">
            <div className="f4 fw6 mb4 dark-blue">Gerenciar Optativas</div>
            <div className="gray tc fw5 mb4">
              Clique em uma matéria para alterná-la entre optativa eletiva e
              livre.
            </div>
            <div className="br4 ba b--moon-gray">
              <header className="fw6 f5 pa3 near-black">Eletivas</header>
              <main className="pa3 pt0 flex flex-wrap">
                {doneElectives.map(code => (
                  <ClasseSlot
                    key={code}
                    code={code}
                    color="dark-blue"
                    overrideClick={() => toggleElective(code)}
                  />
                ))}
              </main>
            </div>
            <div className="pv2 bg-moon-gray br--bottom br4 w-90 center mb4" />
            <div className="br4 ba b--moon-gray">
              <header className="fw6 f5 pa3 near-black">Livres</header>
              <main className="pa3 pt0 flex flex-wrap">
                {doneFreeElectives.map(code => (
                  <ClasseSlot
                    key={code}
                    code={code}
                    color="dark-blue"
                    overrideClick={() => toggleElective(code)}
                  />
                ))}
              </main>
            </div>
            <div className="pv2 bg-moon-gray br--bottom br4 w-90 center mb4" />
          </div>
        </Modal>
      </div>
    )
  }
}

ClasseAdder.propTypes = {
  freeElectives: PropTypes.array.isRequired,
  toggleElective: PropTypes.func.isRequired,
  mandatoryClasses: PropTypes.array.isRequired,
  doneClasses: PropTypes.array.isRequired,
}

export default withElectives(withEvolution(ClasseAdder))
