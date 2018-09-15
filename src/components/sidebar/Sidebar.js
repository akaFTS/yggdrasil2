import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Searchbar from './Searchbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import withEvolution from '../providers/withEvolution'

class Sidebar extends Component {
  clearCaches = () => {
    this.props.clearDone()
  }

  render() {
    return (
      <aside className="bl b--silver bg-white w-100 w-25-l mb1-l flex-none">
        <Searchbar />
        <div className="mv4 mh3">
          <button
            className="db w-100 b--none br3 fw6 pv3 ph2 f5 bg-lightest-blue dark-blue hover-bg-light-blue pointer"
            onClick={this.clearCaches}
          >
            <FontAwesomeIcon icon={faUndoAlt} className="mr2" />
            <span>Limpar</span>
          </button>
        </div>
      </aside>
    )
  }
}

Sidebar.propTypes = {
  clearDone: PropTypes.func.isRequired,
}

export default withEvolution(Sidebar)
