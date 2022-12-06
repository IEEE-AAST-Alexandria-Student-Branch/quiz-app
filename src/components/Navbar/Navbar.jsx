import React, { useState } from 'react'
import './Navbar.styles.css'
import { NavLink, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveUser, setSignOutState } from '../../features/users/userSlice';

export default function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false)


  const user = useSelector(state => state.user)
  console.log(user)

  const handleNavbarClick = () => {
    setExpandNavbar(!expandNavbar)
  }

  // const dispatch = useDispatch()
  // dispatch(setActiveUser(
  //   {
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     email: 'asd@asd.asd'
  //   }
  // ))
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
            user.firstName ? (<NavLink style={({ isActive }) => { return { color: isActive ? '#fff' : '' } }} to={''}>Logout</NavLink>) : (
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
          <Link onClick={handleNavbarClick} to={'signin'}>Sign in</Link>
          <Link onClick={handleNavbarClick} to={'register'}>Register</Link>
        </div>

      </div>

    </>
  )
}
