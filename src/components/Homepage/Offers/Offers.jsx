import React from 'react'
import './Offers.css'

function Offers() {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Shop On Sale</h1>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={"/Assets/hero_image.png"} alt="" />
        </div>
    </div>
  )
}

export default Offers