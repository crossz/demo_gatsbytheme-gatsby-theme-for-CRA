import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useGetUserDetailsQuery } from '../app/services/auth/authService'
import { logout, setCredentials } from '../features/auth/authSlice'
import '../styles/header.css'

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  // automatically authenticate user if token is found
  const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
    pollingInterval: 900000, // 15mins
  })

  useEffect(() => {
    if (data) dispatch(setCredentials(data))
  }, [data, dispatch])

  return (
    <header>
      <div className='header-status'>
        <span>
          {isFetching
            ? `Fetching your profile...`
            : userInfo !== null
            ? `Logged in as ${userInfo.email}`
            : "You're not logged in"}
        </span>
        <div className='cta'>
          {userInfo ? (
            <button className='button' onClick={() => dispatch(logout())}>
              Logout
            </button>
          ) : (
            <NavLink className='button' to='/page-2a/login'>
              Login
            </NavLink>
          )}
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
