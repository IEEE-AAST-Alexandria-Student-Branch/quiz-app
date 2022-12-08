import React, { useState } from 'react'
import './Navbar.styles.css'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setSignOutState } from '../../features/users/userSlice';
import { useEffect } from 'react';
import { clearQuestions } from '../../features/questions/questionsSlice';

export default function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { displayName, accessToken } = useSelector(state => state.user)

  const handleNavbarClick = () => {
    setExpandNavbar(!expandNavbar)
  }
  const handleLogout = () => {
    dispatch(setSignOutState())
    dispatch(clearQuestions())
    navigate('/')
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
          {
            accessToken ? (
              <>
                Hello {displayName}
                <NavLink onClick={handleLogout} style={({ isActive }) => { return { color: isActive ? '#fff' : '' } }} to={''}>Logout</NavLink>
              </>
            ) : (
              <>
                <NavLink style={({ isActive }) => { return { color: isActive ? '#fff' : '' } }} to={'/signin'}>Sign in</NavLink>
                <NavLink style={({ isActive }) => { return { color: isActive ? '#fff' : '' } }} to={'/register'}>Register</NavLink>
              </>
            )
          }
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
{            accessToken ? (
              <>
                <NavLink onClick={handleLogout} style={({ isActive }) => { return { color: isActive ? '#fff' : '' } }} to={''}>Logout</NavLink>
              </>
            ) : (
              <>
                <NavLink style={({ isActive }) => { return { color: isActive ? '#fff' : '' } }} to={'/signin'}>Sign in</NavLink>
                <NavLink style={({ isActive }) => { return { color: isActive ? '#fff' : '' } }} to={'/register'}>Register</NavLink>
              </>
            )}
        </div>

      </div>

    </>
  )
}
