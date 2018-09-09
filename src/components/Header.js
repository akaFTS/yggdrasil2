import React from 'react'

const Header = () => {
  return (
    <header className="bg-light-gray flex justify-center items-center ph2 pt3 pb4">
      <img
        src="src/assets/poring.gif"
        className="flex-none mr4"
        style={{ height: '3rem' }}
      />
      <div>
        <span className="f2 b dark-blue">yggdrasil</span>
        <span className="f2 b blue ml1 relative" style={{ top: '0.5rem' }}>
          2
        </span>
      </div>
    </header>
  )
}

export default Header
