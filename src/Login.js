import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./login.css"


export default function Login() {
  const nav =useNavigate()
  const [Email,setEmail]=useState();
  const [Password,setPassword]=useState();
  function click(){
    const Semail=localStorage.getItem('Email')
    const Spassword=localStorage.getItem('Password')
   
    if(Semail === Email && Spassword === Password ){
      nav('/Profile')
    }else{
      alert("In-correct username and password")
    }
  }
  function email(e){
    setEmail(e.target.value)
  } 
  function password(e){
    setPassword(e.target.value)
  } 

  return (
    <div className='login-container'>
    <div className='login-title'>
      <h1>Welcome to Info-Tech</h1>
    </div>
      <div className='login-box'>
        <h1 className='login-h1-log'>Login</h1>
        <div className='logincontent'>
            <h2>Email</h2>
            <input placeholder='Email' type='Email' value={Email} onChange={email} />
            <h2>Password</h2>
            <input placeholder='Password' type='Password' value={Password} onChange={password} />
            <p className='login-p'>Dont have an account...???   <Link to={'/Signup'} style={{color:"white"}}>Sign Up</Link> </p>
            <button onClick={click} className='login-button'>Login</button>
        </div>
      </div>
    </div>
  );
}
