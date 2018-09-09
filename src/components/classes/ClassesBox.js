import React, { Component } from 'react'

class ClassesBox extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="mb4 flex flex-column items-center">
        <article className="bg-white br4 w-100">
          <header className="dark-gray fw5 f4 pa3">Curso Básico</header>
          <main className="pa3">Oi</main>
        </article>
        <div className="pv2 bg-light-silver br--bottom br4 w-90 mh-auto" />
      </div>
    )
  }
}

export default ClassesBox
