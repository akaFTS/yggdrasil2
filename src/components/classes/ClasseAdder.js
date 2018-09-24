import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-responsive-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import withEvolution from '../providers/withEvolution'
import withClasses from '../providers/withClasses'
import withElectives from '../providers/withElectives'
import Button from '../Button'
import { ClasseStatus } from '../../definitions/constants'

class ClasseAdder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      name: '',
      code: '',
      credits: '',
      wcredits: '',
      isFree: false,
    }
  }

  openModal = () => {
    this.setState({ isModalOpen: true })
  }

  handleCloseModal = () => {
    this.setState({ isModalOpen: false })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  toggleFree = () => {
    this.setState(prevState => ({ isFree: !prevState.isFree }))
  }

  addClasse = () => {
    const { name, code, credits, wcredits, isFree } = this.state
    const { setClasse, addClasse, toggleElective, addingId } = this.props

    addClasse(
      {
        code: code.trim(),
        name,
        credits: credits.trim(),
        wcredits: wcredits.trim(),
      },
      addingId
    )
    setClasse(code, ClasseStatus.DONE)
    if (isFree) toggleElective(code)

    this.setState({
      isModalOpen: false,
      name: '',
      code: '',
      credits: '',
      wcredits: '',
    })
  }

  render() {
    const { isModalOpen, name, code, credits, wcredits, isFree } = this.state
    const { extraText } = this.props

    return (
      <div className="pa1">
        <div
          className="w4 br4 ba bw1 b--dashed b--mid-gray pa2 flex flex-column items-center hover-bg-light-gray pointer relative"
          onClick={this.openModal}
        >
          <span
            className="ph2 f6 fw5 mid-gray tc lh-title"
            style={{ height: '3rem' }}
          >
            Adicionar nova
          </span>
          <FontAwesomeIcon icon={faPlus} className="f2 mid-gray mt2 mb1" />
          <span className={`fw7 f5 light-silver`}>&nbsp;</span>
        </div>
        <Modal
          center
          open={isModalOpen}
          onClose={this.handleCloseModal}
          classNames={{ modal: 'br4 w-100 w-40-l' }}
        >
          <div className="montserrat">
            <div className="f4 fw6 mb4 dark-blue">Adicionar Disciplina</div>
            <div className="flex flex-column mb3">
              <label className="fw5 mb1">Código</label>
              <input
                className="br3 ba b--moon-gray mid-gray pa2 outline-0"
                name="code"
                value={code}
                onChange={this.handleChange}
              />
            </div>
            <div className="flex flex-column mb3">
              <label className="fw5 mb1">Nome</label>
              <input
                className="br3 ba b--moon-gray mid-gray pa2 outline-0"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </div>
            <div className="flex mb3">
              <div className="w-50 flex-none flex flex-column pr2">
                <label className="fw5 mb1">Créditos-Aula</label>
                <input
                  className="br3 ba b--moon-gray mid-gray pa2 outline-0"
                  name="credits"
                  value={credits}
                  onChange={this.handleChange}
                />
              </div>
              <div className="w-50 flex-none flex flex-column pl2">
                <label className="fw5 mb1">Créditos-Trabalho</label>
                <input
                  className="br3 ba b--moon-gray mid-gray pa2 outline-0"
                  name="wcredits"
                  value={wcredits}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="mb4">
              <label className="fw5 mb1">Tipo de Optativa</label>
              <div className="ba bw2 b--dark-blue br3 flex overflow-hidden">
                <div
                  className={`br bw1 b--dark-blue pa2 fw5 flex-auto tc ${
                    isFree
                      ? 'dark-blue pointer hover-bg-light-gray'
                      : 'white bg-dark-blue'
                  }`}
                  onClick={() => (isFree ? this.toggleFree() : null)}
                >
                  Eletiva
                </div>
                <div
                  className={`bl bw1 b--dark-blue pa2 fw5 flex-auto tc ${
                    isFree
                      ? 'white bg-dark-blue'
                      : 'dark-blue pointer hover-bg-light-gray'
                  }`}
                  onClick={() => (isFree ? null : this.toggleFree())}
                >
                  Livre
                </div>
              </div>
            </div>
            <Button text="Adicionar" icon={faPlus} onClick={this.addClasse} />
            {extraText && (
              <div className="mt4 tj gray f6 lh-copy">{extraText}</div>
            )}
          </div>
        </Modal>
      </div>
    )
  }
}

ClasseAdder.propTypes = {
  addingId: PropTypes.string.isRequired,
  setClasse: PropTypes.func.isRequired,
  addClasse: PropTypes.func.isRequired,
  toggleElective: PropTypes.func.isRequired,
  extraText: PropTypes.node,
}

export default withElectives(withClasses(withEvolution(ClasseAdder)))
