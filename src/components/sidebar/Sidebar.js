import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Searchbar from './Searchbar'
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import withEvolution from '../providers/withEvolution'
import withClasses from '../providers/withClasses'
import withElectives from '../providers/withElectives'
import Button from '../Button'
import ElectivesManager from './ElectivesManager'
import CreditsDash from '../credits/CreditsDash'
import Switch from 'react-ios-switch'

class Sidebar extends Component {
  clearCaches = () => {
    const { clearDone, clearCustom, clearElectives } = this.props
    clearDone()
    clearCustom()
    clearElectives()
  }

  render() {
    const { isQuickEditing, toggleQuickEdition } = this.props
    return (
      <aside className="bl b--silver bg-white w-100 w-25-l mb1-l flex-none">
        <Searchbar />
        <div className="mv4 mh3">
          <CreditsDash />
        </div>
        <div className="mv4 mh3">
          <ElectivesManager />
        </div>
        <div className="mv4 mh3">
          <Button
            variation="danger"
            text="Limpar"
            icon={faUndoAlt}
            onClick={this.clearCaches}
          />
        </div>
        <div className="mv4 mh3">
          <div className="mb4 mb0-l flex items-center">
            <Switch
              checked={isQuickEditing}
              onChange={toggleQuickEdition}
              onColor="#8a229b"
            />
            <span className="f5 ml2 fw5 mid-gray">Edição Rápida</span>
          </div>
        </div>
      </aside>
    )
  }
}

Sidebar.propTypes = {
  clearDone: PropTypes.func.isRequired,
  clearCustom: PropTypes.func.isRequired,
  clearElectives: PropTypes.func.isRequired,
  isQuickEditing: PropTypes.bool.isRequired,
  toggleQuickEdition: PropTypes.func.isRequired,
}

export default withElectives(withClasses(withEvolution(Sidebar)))
