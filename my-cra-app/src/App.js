import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Box } from '@material-ui/core'

const App = (isMobile) => {
  const matches = isMobile?.isMobile
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn
        </a>
      </header>
      <Box color={matches ? 'primary.main' : 'secondary.main'}>
        测试一下theme my-cra-app
      </Box>
    </div>
  )
}

export default App
