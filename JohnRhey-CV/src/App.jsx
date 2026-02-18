import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import About from './components/About'
import Hobbies from './components/Hobbies'
import Experience from './components/Experience'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Hobbies />
      <Experience />
      <Skills />
    </>
  )
}

export default App
