import React from 'react'
import "./Schedule.css"
import Schedular from './Schedular'
import Sidebar from '../Sidebar/Sidebar'
import "../Home/Home.css"

const Schedule = () => {
  return (
    <div >      
            <h1 style={{textAlign: "center", backgroundColor: "blue", margin: "0px 0px", color: "white"}}>Seller Dashboard</h1>
            <div className="App">
                <div className='sidebar-div'>
                    <Sidebar />
                </div>
                <div className='MainPage'><Schedular /></div>
                
            </div>

    </div>
  )
}

export default Schedule
