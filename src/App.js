import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ClassesContainer from './components/classes/ClassesContainer'
import EvolutionProvider from './components/evolution/EvolutionProvider'
import 'tachyons'
import './montserrat.css'
import Sidebar from './components/sidebar/Sidebar'

class App extends Component {
  render() {
    return (
      <div className="montserrat bg-light-gray">
        <EvolutionProvider>
          <Header />
          <div className="flex flex-column-reverse flex-row-l">
            <ClassesContainer />
            <Sidebar />
          </div>
          <Footer />
        </EvolutionProvider>
      </div>
    )
  }
}

export default App
