import React from 'react';
import './App.css';

import profile from "./Image/a.png";
import email from "./Image/email.jpg";
import pass from "./Image/pass.png";

function Login() {
  return (
    <div className="main">
     <div className="sub-main">
        <div> 
         <div className="imgs">
           <div className="container-image"> 
              <img src={profile} alt="profile" className='profile' />  

           </div>
           </div>

      <h1>Login Page</h1>
      <div>
        <img src={email} alt="email" className='email'/>
        <input type="text" placeholder='user name' className='name'/>
      </div>
      <div className='second-input'>
        <img src={pass} alt="pass" className='email'/>
        <input type="password" placeholder='Password' className='name'/>
      </div>
      
      
<div className='login-button'>
  <button>Sign in</button>
  
  </div>
     <div>
       <p className='link'>
       <a href="#">Forgot password ?</a> Or <a href="#">Sign Up</a>
         </p>
         </div>  
         
        
   </div>
</div>
</div>
 
        
            );
          }

export default Login;
