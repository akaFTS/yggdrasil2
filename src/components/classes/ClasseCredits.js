import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import withClasses from '../providers/withClasses'

class ClasseCredits extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditingCredits: false,
      currentCredits: props.classe.credits,
      currentWCredits: props.classe.wcredits,
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  startEditing = () => {
    this.setState({ isEditingCredits: true })
  }

  saveEditing = () => {
    const { classe, setCredits } = this.props
    const { currentCredits, currentWCredits } = this.state
    setCredits(classe.code, currentCredits || 0, currentWCredits || 0)
    this.setState({ isEditingCredits: false })
  }

  resetCredits = () => {
    const { classe, resetCredits } = this.props
    this.setState({
      currentCredits: classe.oldCredits,
      currentWCredits: classe.oldWCredits,
    })
    resetCredits(classe.code)
  }

  render() {
    const { classe, color } = this.props
    const { isEditingCredits, currentCredits, currentWCredits } = this.state

    const creditsEdited =
      classe.oldCredits && classe.credits !== classe.oldCredits
    const wcreditsEdited =
      classe.oldWCredits && classe.wcredits !== classe.oldWCredits

    return (
      <div className="flex items-center">
        <span className="mr2">Créditos:</span>
        {isEditingCredits ? (
          <input
            type="tel"
            className={`fw6 ${color} tc outline-0 br3 ba b--solid b--light-silver w2 h2`}
            value={currentCredits}
            onChange={this.handleChange}
            name="currentCredits"
          />
        ) : (
          <div
            className={`fw6 ${color} w2 h2 br3 pa1 flex items-center justify-center ${
              creditsEdited ? 'bg-light-gray' : ''
            }`}
          >
            <span>{classe.credits}</span>
          </div>
        )}
        <span className="mh1">+</span>
        {isEditingCredits ? (
          <input
            type="tel"
            className={`fw6 mid-gray tc outline-0 br3 ba b--solid b--light-silver w2 h2`}
            value={currentWCredits}
            onChange={this.handleChange}
            name="currentWCredits"
          />
        ) : (
          <div
            className={`fw6 w2 h2 br3 pa1 flex items-center justify-center ${
              wcreditsEdited ? 'bg-light-gray' : ''
            }`}
          >
            <span>{classe.wcredits}</span>
          </div>
        )}
        {classe.custom ? null : isEditingCredits ? (
          <button
            className="ml3 h2 bg-lightest-blue pointer hover-bg-light-blue dark-blue b--none f5 ph3 pv1 br3"
            onClick={this.saveEditing}
          >
            Salvar
          </button>
        ) : classe.creditsChanged ? (
          <FontAwesomeIcon
            icon={faUndoAlt}
            className={`${color} ml2 pointer hover-bg-light-gray pa1 br2`}
            onClick={this.resetCredits}
          />
        ) : (
          <FontAwesomeIcon
            icon={faPencilAlt}
            className={`${color} ml2 pointer hover-bg-light-gray pa1 br2`}
            onClick={this.startEditing}
          />
        )}
      </div>
    )
  }
}
ClasseCredits.propTypes = {
  classe: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  setCredits: PropTypes.func.isRequired,
  resetCredits: PropTypes.func.isRequired,
}

export default withClasses(ClasseCredits)
