import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import ClasseSlot from '../classes/ClasseSlot'
import withClasses from '../providers/withClasses'

class Searchbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
      searchResults: [],
    }
  }

  handleChange = e => {
    const { allClasses } = this.props
    const searchQuery = e.target.value
    const searchResults =
      searchQuery.trim() !== ''
        ? allClasses
            .filter(
              classe =>
                classe.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                classe.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map(classe => classe.code)
            .slice(0, 6)
        : []

    this.setState({ searchQuery, searchResults })
  }

  clearSelection = () => {
    this.setState({ searchQuery: '', searchResults: [] })
  }

  render() {
    const { searchQuery, searchResults } = this.state
    return (
      <div className="bg-dark-blue h2 pa2" style={{ height: '3rem' }}>
        <div className="relative h-100">
          <div
            className={`h-100 w-100 br3 bg-white relative z-3 flex items-center ${
              searchResults.length > 0 ? 'br--top bb b--moon-gray' : 'b--none'
            }`}
          >
            <input
              value={searchQuery}
              onChange={this.handleChange}
              type="text"
              placeholder="Buscar"
              className="ph2 outline-0 h-100 w-100 bg-transparent b--none"
            />
            {searchQuery === '' ? (
              <FontAwesomeIcon icon={faSearch} className="gray ph3" />
            ) : (
              <FontAwesomeIcon
                icon={faTimes}
                className="gray hover-dark-gray pointer ph3"
                onClick={this.clearSelection}
              />
            )}
          </div>
          {searchResults.length > 0 && (
            <div className="absolute w-100 z-2 bg-white shadow-1 br3 br--bottom pa2 flex flex-wrap justify-between">
              {searchResults.map(code => (
                <ClasseSlot key={code} code={code} color="dark-blue" />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}

Searchbar.propTypes = {
  allClasses: PropTypes.array.isRequired,
}

export default withClasses(Searchbar)
