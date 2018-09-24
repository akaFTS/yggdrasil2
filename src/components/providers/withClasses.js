import React from 'react'
import { ClassesContext } from './ClassesProvider'

export default function withClasses(Component) {
  return function ClassesInjectedComponent(props) {
    return (
      <ClassesContext.Consumer>
        {({
          allClasses,
          addClasse,
          removeClasse,
          clearCustom,
          customBoxClasses,
          importClasses,
          exportClasses,
        }) => (
          <Component
            {...props}
            allClasses={allClasses}
            addClasse={addClasse}
            removeClasse={removeClasse}
            clearCustom={clearCustom}
            customBoxClasses={customBoxClasses}
            importClasses={importClasses}
            exportClasses={exportClasses}
          />
        )}
      </ClassesContext.Consumer>
    )
  }
}
