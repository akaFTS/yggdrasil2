import React from 'react'
import { EvolutionContext } from './EvolutionProvider'

export default function withEvolution(Component) {
  return function EvolutionInjectedComponent(props) {
    return (
      <EvolutionContext.Consumer>
        {({
          doneClasses,
          doingClasses,
          scheduledClasses,
          setClasse,
          getClasseStatus,
          clearEvolution,
          toggleQuickEdition,
          isQuickEditing,
          importEvolution,
          exportEvolution,
        }) => (
          <Component
            {...props}
            doneClasses={doneClasses}
            doingClasses={doingClasses}
            scheduledClasses={scheduledClasses}
            setClasse={setClasse}
            getClasseStatus={getClasseStatus}
            clearEvolution={clearEvolution}
            toggleQuickEdition={toggleQuickEdition}
            isQuickEditing={isQuickEditing}
            importEvolution={importEvolution}
            exportEvolution={exportEvolution}
          />
        )}
      </EvolutionContext.Consumer>
    )
  }
}
