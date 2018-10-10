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
          setCredits,
          resetCredits,
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
            setCredits={setCredits}
            resetCredits={resetCredits}
          />
        )}
      </ClassesContext.Consumer>
    )
  }
}
