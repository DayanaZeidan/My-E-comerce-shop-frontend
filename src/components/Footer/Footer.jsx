import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={'/Assets/brand-logo.png'} alt="" />
            <p>MY BRAND</p>
        </div>
        <ul className="footer-links">
            <li>Care Instructions</li>
            <li>Shipping</li>
            <li>Terms</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-icon">
            <div className="container">
                <img src={'/Assets/instagram_icon.png'} alt="" />
            </div>
            <div className="container">
                <img src={'/Assets/pintester_icon.png'} alt="" />
            </div>
            <div className="container">
                <img src={'/Assets/whatsapp_icon.png'} alt="" />
            </div>
        </div>
        <div className="copyright">
            <hr/>
            <p>Copyright @ 2024- Brand by Dana.</p>
        </div>
    </div>
  )
}

export default Footer