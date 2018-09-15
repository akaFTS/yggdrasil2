import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import allClasses from '../../definitions/allclasses.json'
import ClasseSlot from '../classes/ClasseSlot'

class Searchbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
      searchResults: [],
    }
  }

  handleChange = e => {
    const searchQuery = e.target.value
    const searchResults =
      searchQuery.trim() !== ''
        ? allClasses
            .filter(
              classe =>
                classe.code.includes(searchQuery) ||
                classe.name.includes(searchQuery)
            )
            .map(classe => classe.code)
            .slice(0, 6)
        : []

    console.log(searchResults)

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
            <div className="absolute w-100 bg-white shadow-1 br3 br--bottom pa2 flex flex-wrap justify-between">
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

export default Searchbar
