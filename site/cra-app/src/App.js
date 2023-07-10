import React from 'react'
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Header from './components/Header'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import HomeScreen from './screens/HomeScreen'
import ProtectedRoute from './routing/ProtectedRoute'
import './App.css'
import { Provider } from 'react-redux'
import store from './app/store'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <main className='container content'>
        <Routes>
          <Route path='/page-2a' element={<HomeScreen />} />
          <Route path='/page-2a/login' element={<LoginScreen />} />
          <Route path='/page-2a/register' element={<RegisterScreen />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/page-2a/user-profile' element={<ProfileScreen />} />
          </Route>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
      </Provider>
  )
}

export default App
