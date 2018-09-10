import React from 'react'
import ClassesSection from './ClassesSection'
import geral from '../../tracks/geral'

const ClassesContainer = () => {
  return (
    <main>
      <ClassesSection
        title="Geral"
        colors={['dark-blue', 'bg-light-blue']}
        rules={geral}
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
