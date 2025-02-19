import React from 'react'
import Header from './components/Header'
import './App.css'
import Home from './components/Home'
import Services from './components/Services'
import Experiences from './components/Experiences'
import Education from './components/Education'
import Contact from './components/Contact'
import SkillsServices from './components/SkillsServices'

const App = () => {
  return (
    <>
      <Header />
      <div id="1">
        <Home />
      </div>
      <div id="3">
        <SkillsServices />
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