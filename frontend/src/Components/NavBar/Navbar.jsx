import React, { useState } from 'react'
import './Navbar.css'
import logo from "../Assets/logo.png"
import cart from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu,setMenu] = useState("shop")
  return (
    <div className="navbar">
        <div className='nav-logo'>
            <img src={logo}/>
            <p>Shoppr</p>
        </div>
        <ul className='nav-menu'>
            <li  onClick={()=>{setMenu("shop")}}>
              <Link style={{textDecoration:'none', color:'grey'}} to="/">Shop</Link>   
            {menu==="shop"?<hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("mens")}} >
              <Link style={{textDecoration:'none', color:'grey'}}  to="/mens">Men</Link>
              {menu==="mens"?<hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("womens")}}>
              <Link style={{textDecoration:'none', color:'grey'}}  to="/womens">Women</Link>   
              {menu==="womens"?<hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("kids")}}>
              <Link style={{textDecoration:'none',color:'grey'}}  to="/kids">Kids</Link>
              {menu==="kids"?<hr/>:<></>}
            </li>
        </ul>
        <div className='nav-login-cart'>
            <button>
              <Link style={{textDecoration:'none', color:'black'}}  to="/login">login</Link>
            </button>
            <Link to="/cart"><img src={cart}></img></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar

