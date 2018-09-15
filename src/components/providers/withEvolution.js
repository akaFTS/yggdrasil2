import React from 'react'
import { EvolutionContext } from './EvolutionProvider'

export default function withEvolution(Component) {
  return function EvolutionInjectedComponent(props) {
    return (
      <EvolutionContext.Consumer>
        {({ doneClasses, doClasse, undoClasse, clearDone }) => (
          <Component
            {...props}
            doneClasses={doneClasses}
            doClasse={doClasse}
            undoClasse={undoClasse}
            clearDone={clearDone}
          />
        )}
      </EvolutionContext.Consumer>
    )
  }
}
