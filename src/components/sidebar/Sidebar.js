import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Searchbar from './Searchbar'
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import withEvolution from '../providers/withEvolution'
import withClasses from '../providers/withClasses'
import withElectives from '../providers/withElectives'
import Button from '../Button'
import ElectivesManager from './ElectivesManager'
import CreditsManager from '../credits/CreditsManager'

class Sidebar extends Component {
  clearCaches = () => {
    const { clearDone, clearCustom, clearElectives } = this.props
    clearDone()
    clearCustom()
    clearElectives()
  }

  render() {
    return (
      <aside className="bl b--silver bg-white w-100 w-25-l mb1-l flex-none">
        <Searchbar />
        <div className="mv4 mh3">
          <CreditsManager />
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
      </aside>
    )
  }
}

Sidebar.propTypes = {
  clearDone: PropTypes.func.isRequired,
  clearCustom: PropTypes.func.isRequired,
  clearElectives: PropTypes.func.isRequired,
}

export default withElectives(withClasses(withEvolution(Sidebar)))
