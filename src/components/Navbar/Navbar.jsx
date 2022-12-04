import React, { useState } from 'react'
import './Navbar.styles.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false)

  const handleNavbarClick = () => {
    setExpandNavbar(!expandNavbar) 
  }

  return (
    <>
      <nav>
        <div className='logo'>
          <img src={'/lamp.png'} width={48} height={48} alt={'logo'} />
          <Link to={'/'}>
            <h1>Quizz App</h1>
          </Link>
        </div>
        <div className='links'>
          <Link to={'signin'}>Sign in</Link>
          <Link to={'register'}>Register</Link>
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
          expandNavbar ? "mobileNavbar" : "hideMobileNavbar"
        }
      >
        <hr />

        <div className='mobileLinks'>
          <Link onClick={handleNavbarClick} to={'signin'}>Sign in</Link>
          <Link onClick={handleNavbarClick} to={'register'}>Register</Link>
        </div>

      </div>

    </>
  )
}
