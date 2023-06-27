import React from 'react'
import '../styles/header.css'

// NOTE: the 'router' used in React SPA have to be changed to the router gatsby use.
// import { NavLink } from 'react-router-dom'
import { Link as NavLink } from '@reach/router'

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
