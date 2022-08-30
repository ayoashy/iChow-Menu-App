import React from 'react'
import iChow from './assets/iChow.svg'

const Header = () => {
  return (
    <div className='header'>
      <nav>
        <div className='logo-container'>
          <img src={iChow} alt='' className='ichow-logo' />
        </div>
      </nav>
    </div>
  )
}

export default Header
