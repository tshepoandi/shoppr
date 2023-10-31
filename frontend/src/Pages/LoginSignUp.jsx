import React from 'react'
import "../css/loginignup.css"
function LoginSignUp() {
  return (
    <div className='loginsign'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="text" placeholder='Email Address' />
          <input type="text"  placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginignup-login'>Already have an account?<span> Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By Continuing, I agree to the terms of use and orivacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp