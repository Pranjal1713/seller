import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import MainPage from './MainPage'
import './Home.css'

// import Schedule from '../Schedular/Schedule'

const Home = () => {
  return (
    <>
    <div className='home'>
        <div>
            <h1 style={{textAlign: "center", backgroundColor: "blue", margin: "0px 0px", color: "white"}}>Seller Dashboard</h1>
            <div className="App">
                <div className='sidebar-div'>
                    <Sidebar />
                </div>
                <div className='MainPage'><MainPage /></div>
                
            </div>
        </div>  
    </div>
    </>
    
  )
}

export default Home
