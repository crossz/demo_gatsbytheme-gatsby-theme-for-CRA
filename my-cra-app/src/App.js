import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import HomeScreen from './screens/HomeScreen'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <main className='container content'>
        <Routes>
          <Route path='/page-2a' element={<HomeScreen />} />
          <Route path='/page-2a/login' element={<LoginScreen />} />
          <Route path='/page-2a/register' element={<RegisterScreen />} />
          <Route path='/page-2a/user-profile' element={<ProfileScreen />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
