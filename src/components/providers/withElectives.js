import React from 'react'
import { ElectivesContext } from './ElectivesProvider'

export default function withElectives(Component) {
  return function ElectivesInjectedComponent(props) {
    return (
      <ElectivesContext.Consumer>
        {({
          freeElectives,
          toggleElective,
          mandatoryClasses,
          clearElectives,
        }) => (
          <Component
            {...props}
            freeElectives={freeElectives}
            toggleElective={toggleElective}
            mandatoryClasses={mandatoryClasses}
            clearElectives={clearElectives}
          />
        )}
      </ElectivesContext.Consumer>
    )
  }
}
