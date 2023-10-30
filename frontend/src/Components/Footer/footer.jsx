import React from 'react'
import './Footer.css'
import footer_logo from "../Assets/logo_big.png"

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>TSHEPO's Shop</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-copyright">Copyright @2023 All rights res...</div>
    </div>
  )
}

export default Footer