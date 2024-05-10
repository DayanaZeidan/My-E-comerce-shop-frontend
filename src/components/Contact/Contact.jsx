import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <h1>Get Exclusive</h1>
        <p>Subscribe and stay updated</p>
        <div>
            <input type='email' placeholder='Your Email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Contact