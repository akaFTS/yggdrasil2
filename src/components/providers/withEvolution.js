import React from 'react'
import { EvolutionContext } from './EvolutionProvider'

export default function withEvolution(Component) {
  return function EvolutionInjectedComponent(props) {
    return (
      <EvolutionContext.Consumer>
        {({
          doneClasses,
          toggleDone,
          clearDone,
          toggleQuickEdition,
          isQuickEditing,
        }) => (
          <Component
            {...props}
            doneClasses={doneClasses}
            toggleDone={toggleDone}
            clearDone={clearDone}
            toggleQuickEdition={toggleQuickEdition}
            isQuickEditing={isQuickEditing}
          />
        )}
      </EvolutionContext.Consumer>
    )
  }
}
