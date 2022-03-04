import React from 'react'
import './App1.css';

const Login1 = () => {
  return (
    <div className='container'>
      <div className='rakshas'>
      <h1>Sign Up Form</h1>
      
      <label>Username</label>
      <div>
      <input type="text"></input>
      </div>
      <label>password</label>
      <div>
      <input type="text"></input>
      </div>
      <label>Confirm password</label>
      <div>
      <input type="text"></input>
      </div>
      
      <div className='bittu'>
  <input type="button" value="Submit" />
  </div>
  
      </div>
      </div>
    
  )
}

export default Login1

