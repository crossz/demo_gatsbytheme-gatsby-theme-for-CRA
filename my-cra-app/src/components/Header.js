import React from 'react'
import { NavLink } from 'react-router-dom'
// import { Link as NavLink } from '@reach/router'
import '../styles/header.css'

const Header = () => {
  return (
    <header>
      <div className='header-status'>
        <span>You're not logged in</span>
        <div className='cta'>
          <NavLink className='button' to='/page-2a/login'>
            Login
          </NavLink>
        </div>
      </div>
      <nav className='container navigation'>
        <NavLink to='/page-2a'>Home</NavLink>
        <NavLink to='/page-2a/login'>Login</NavLink>
        <NavLink to='/page-2a/register'>Register</NavLink>
        <NavLink to='/page-2a/user-profile'>Profile</NavLink>
      </nav>
    </header>
  )
}

export default Header
