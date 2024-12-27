import React, { useState } from 'react'
import "./components.css"
import Teaser from "../assets/Video/teaser1.mp4"
import mockData from '../../../BackEnd/Data'
function teaser() {
  
  const teaserData = mockData.filter((data) => data.teaser === true);
  return (
    <div className='teaser'>
    <div className='teaser-compo'>
         <video src={Teaser} autoPlay muted ></video>
       <div className='teaser-ui'>
       <h1 style={{ fontSize: '1.5vw' }}>
            {teaserData[0].title}  <div className="badge badge-error ">Sale</div>
          </h1>
       <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-error">Buy Now</button>
       </div>
    </div>
       
    </div>
  )
}

export default teaser