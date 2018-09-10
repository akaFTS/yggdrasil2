import React, { Component } from 'react'

class Classe extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="flex-none pa2">
        <div className="w4 br4 pa2 flex flex-column items-center hover-bg-light-gray pointer">
          <span className="f7 gray tc lh-title h2 overflow-y-hidden">
            Álgebra Booleana e Circuitos Digitais
          </span>
          <img
            className="mv1"
            src="/src/assets/skills/MAC0110.gif"
            style={{ height: '2.5rem' }}
          />
          <span className="fw7 f5 dark-gray">MAC0110</span>
        </div>
      </div>
    )
  }
}

export default Classe
