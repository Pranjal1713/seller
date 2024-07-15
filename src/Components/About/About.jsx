import React from 'react'
import "./About.css"
import Sidebar from '../Sidebar/Sidebar'


const About = () => {
  return (
    <div >      
            <h1 style={{textAlign: "center", backgroundColor: "blue", margin: "0px 0px", color: "white"}}>Seller Dashboard</h1>
            <div className="App">
                <div className='sidebar-div'>
                    <Sidebar />
                </div>
                <div className='MainPage'>
                    <div className="heading">
                    <h1 >This section is need to be created</h1>
                    </div>
                </div>
                
            </div>

    </div>
  )
}

export default About
