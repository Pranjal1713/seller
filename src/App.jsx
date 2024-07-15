import { useState } from 'react'
import './App.css'
// import Sidebar from './Components/Sidebar/Sidebar'
import Home from './Components/Home/Home'
import {Routes , Route} from "react-router-dom"
import Schedule from './Components/Schedular/Schedule'
import About from './Components/About/About'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/home" element={<Home/>}  />
        <Route path="/schedule" element={<Schedule/>}  />
        <Route path="/about" element={<About/>}  />

      </Routes>
      
    </>
  )
}

export default App
