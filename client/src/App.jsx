import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import SignIn from './pages/Signin'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Header from './components/Header'

export default function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/Home" element = {<Home />} />
    <Route path='/about' element = {<About />} />
    <Route path='/sign-in' element = {<SignIn />} />
    <Route path='/sign-up' element = {<SignUp />} />
    <Route path='/dashboard' element = {<Dashboard />} />
    <Route path='/projects' element = {<Projects />} />

  </Routes>
  
  </BrowserRouter>
  )
}
