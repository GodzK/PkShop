import React from 'react'
import "./style.css"
function Login() {
  return (
    <div className='login-container'>
       <div className='login-card'>
        <div className='login-header'>
            <h1>Welcome To PkCard Shop</h1>
        </div>
        <div className='login'>
          <div className='login-sec'>
             <h2>username</h2>
             <input type="text" />
          </div>
          <div className='login-sec'>
             <h2>password</h2>
             <input type="text" />
          </div>
         
        </div>
             <button className='login-btn'>Login</button>
              <p style={{color:"white"}}>or if not have account go <a href="/Register" style={{color:"blue"}}>Register</a></p>
       </div>
    </div>
  )
}

export default Login