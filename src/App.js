import React, { Component } from 'react'
import Header from './components/Header'
import ClassesContainer from './components/classes/ClassesContainer'
import 'tachyons'
import './montserrat.css'

class App extends Component {
  render() {
    return (
      <div className="montserrat bg-light-gray">
        <Header />
        <ClassesContainer />
      </div>
    )
  }
}

export default App
