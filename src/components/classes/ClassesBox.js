import React from 'react'
import Classe from './Classe'

const ClassesBox = () => {
  return (
    <div className="mb4 flex flex-column items-center">
      <article className="bg-white br4 w-100">
        <header className="dark-gray fw5 f4 pa3">Obrigatórias</header>
        <main className="pa3 pt0 flex flex-wrap">
          <Classe />
          <Classe />
          <Classe />

          <Classe />

          <Classe />
          <Classe />
          <Classe />
          <Classe />
          <Classe />
          <Classe />
        </main>
      </article>
      <div className="pv2 bg-light-silver br--bottom br4 w-90 mh-auto" />
    </div>
  )
}

export default ClassesBox
