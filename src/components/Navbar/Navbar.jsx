import React, { useState } from 'react'
import './Navbar.styles.css'

export default function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false)

  return (
    <>
      <nav>
        <div className='logo'>
          <img src={'/lamp.png'} width={48} height={48} alt={'logo'} />
          <a href='/'>
            <h1>Quizz App</h1>
          </a>
        </div>
        <div className='links'>
          <a href='/'>Sign in</a>
          <a href='/'>Resgister</a>
        </div>
        <button
          className="hamburger"
          onClick={() => {
            setExpandNavbar(!expandNavbar);
          }}
        >
          <img src='/hamburger.png' width={32} height={32} alt='' />
        </button>
      </nav>
      <div
        className={
          expandNavbar ? "mobileNavbar" : "mobileNavbarOnPC"
        }
      >
        <hr />

        <div className='mobileLinks'>
          <a href='/'>Sign in</a>
          <a href='/'>Resgister</a>
        </div>

      </div>

    </>
  )
}
