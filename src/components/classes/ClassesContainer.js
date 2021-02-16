import React from 'react'
import Track from './Track'
import geral from '../../tracks/geral'
import sistemas from '../../tracks/sistemas'
import ia from '../../tracks/ia'
import escience from '../../tracks/escience'
import teoria from '../../tracks/teoria'

const ClassesContainer = () => {
  return (
    <main className="flex-auto">
      <Track
        title="Geral"
        colors={['dark-blue', 'bg-light-blue']}
        rules={geral}
        shouldStartOpen
      />
      <Track
        title="Sistemas de Software"
        colors={['dark-green', 'bg-light-green']}
        rules={sistemas}
      />
      <Track
        title="Inteligência Artificial"
        colors={['dark-pink', 'bg-light-pink']}
        rules={ia}
      />
      <Track
        title="Ciência de Dados"
        colors={['orange', 'bg-light-yellow']}
        rules={escience}
      />
      <Track
        title="Teoria da Computação"
        colors={['dark-red', 'bg-light-red']}
        rules={teoria}
      />
    </main>
  )
}

export default ClassesContainer
