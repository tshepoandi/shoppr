import React from 'react'
import './offers.css'
import exclusive_image from '../Assets/exclusive_image.png'


function Offers() {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt=" "></img>
        </div>
    </div>
  )
}

export default Offers