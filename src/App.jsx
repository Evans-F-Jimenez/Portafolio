import React from 'react'
import Header from './components/Header'
import './App.css'
import Home from './components/Home'
import Services from './components/Services'
import Experiences from './components/Experiences'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Header />
      <div id="1">
        <Home />
      </div>
      <div id="2">
        <Services />
      </div>
      <div id="3">
        <Skills />
      </div>
      <div id="4">
        <Education />
      </div>
      <div id="5">
        <Experiences />
      </div>
      <div id="6">
        <Contact />
      </div></>
  )
}

export default App