import React from 'react'
import "./style.css"
function Register() {
  return (
    <div className='login-container'>
       <div className='login-card'>
        <div className='login-header'>
            <h1>Register Your Account</h1>
        </div>
        <div className='login'>
          <div className='login-sec'>
             <h2>username</h2>
             <input type="text" />
          </div>
          <div className='login-sec'>
             <h2>password</h2>
             <input type="password" />
          </div>
          <div className='login-sec'>
             <h2>Repeat your password</h2>
             <input type="password" />
          </div>
        </div>
             <button className='login-btn'>Create an Account</button>
              <p style={{color:"white"}}>go back to login   <a href="/login" style={{color:"blue"}}> Login</a></p>
       </div>
    </div>
  )
}

export default Register