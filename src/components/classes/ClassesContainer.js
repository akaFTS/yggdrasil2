import React from 'react'
import ClassesSection from './ClassesSection'

const ClassesContainer = () => {
  return (
    <main>
      <ClassesSection
        title="Geral"
        colors={['dark-gray', 'bg-light-silver']}
        shouldStartOpen
      />
      <ClassesSection
        title="Teoria"
        colors={['dark-gray', 'bg-light-silver']}
      />
    </main>
  )
}

export default ClassesContainer
