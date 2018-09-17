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
        }) => (
          <Component
            {...props}
            allClasses={allClasses}
            addClasse={addClasse}
            removeClasse={removeClasse}
            clearCustom={clearCustom}
            customBoxClasses={customBoxClasses}
          />
        )}
      </ClassesContext.Consumer>
    )
  }
}
