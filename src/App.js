import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ClassesContainer from './components/classes/ClassesContainer'
import EvolutionProvider from './components/evolution/EvolutionProvider'
import 'tachyons'
import './montserrat.css'

class App extends Component {
  render() {
    return (
      <div className="montserrat bg-light-gray">
        <EvolutionProvider>
          <Header />
          <ClassesContainer />
          <Footer />
        </EvolutionProvider>
      </div>
    )
  }
}

export default App
