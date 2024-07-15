import React from 'react'
import "./Home.css"

const MainPage = () => {
  return (
    <>
      <div className='MainPage-div'>
        <div className='fullheading'>

          <div className="statistic">
            <h2>Here is the detailed Statistic of the sells you have done</h2>
            <button>Download all data</button>
          </div>

          <div className="TotalSales">
            <div className="center">

            <div className='first'>
              <h3>Total Sales</h3>
              <h6>March 2023 - 2024</h6>
            </div>
            <div className='second'>
              <h4>$650</h4>
              <img src="https://st.depositphotos.com/1079068/3266/i/450/depositphotos_32662663-stock-photo-business-graph-up.jpg" 
              alt="sells"
              width={80}
              height={50}
               />
            </div>

            </div>
          </div>
          
        </div>

        <div className='fullheading2'></div>


      </div>
    
    </>
  )
}

export default MainPage
