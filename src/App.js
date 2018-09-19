import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ClassesContainer from './components/classes/ClassesContainer'
import EvolutionProvider from './components/providers/EvolutionProvider'
import ClassesProvider from './components/providers/ClassesProvider'
import ElectivesProvider from './components/providers/ElectivesProvider'
import Sidebar from './components/sidebar/Sidebar'
import 'tachyons'
import './montserrat.css'

class App extends Component {
  render() {
    return (
      <div className="montserrat bg-light-gray">
        <EvolutionProvider>
          <ClassesProvider>
            <ElectivesProvider>
              <Header />
              <div className="flex flex-column-reverse flex-row-l">
                <ClassesContainer />
                <Sidebar />
              </div>
              <Footer />
            </ElectivesProvider>
          </ClassesProvider>
        </EvolutionProvider>
      </div>
    )
  }
}

export default App
