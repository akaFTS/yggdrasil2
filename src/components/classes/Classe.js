import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from '@vtex/styleguide/lib/Modal'
import allClasses from '../../tracks/allclasses'

class Classe extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { code, color } = this.props
    const classe = allClasses.find(classe => classe.code === code)

    return (
      <React.Fragment>
        <div className="flex-none pa2">
          <div className="w4 br4 pa2 flex flex-column items-center hover-bg-light-gray pointer">
            <span className="f7 gray tc lh-title h2 overflow-y-hidden">
              {classe.name}
            </span>
            <img
              className="mv1"
              src={`/src/assets/skills/${classe.code}.gif`}
              style={{ height: '2.5rem' }}
            />
            <span className={`fw7 f5 ${color}`}>{classe.code}</span>
          </div>
        </div>

        <Modal centered isOpen={true} onClose={this.handleCloseModal}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Modal>
      </React.Fragment>
    )
  }
}

Classe.propTypes = {
  code: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default Classe
