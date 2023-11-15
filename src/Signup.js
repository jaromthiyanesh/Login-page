import React, { useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom';


export default function Signup() {

  const nav = useNavigate();
  const [First,setFirst]=useState('');
  const [Last,setLast]= useState('');
  const [Email,setEmail]=useState('');
  const [Password,setPassword]= useState('');
  const [Confirmpass,setConfirmpass]=useState('');
  

    function click(){
            localStorage.setItem('Email',Email);
            localStorage.setItem('Password',Password);
            localStorage.setItem('First',First);
            localStorage.setItem('Last',Last);
            localStorage.setItem('Confirmpass',Confirmpass);
            
            if (Email !== '' && Password !== '' && First !== '' && Last !== '' && Confirmpass !== ''){
              nav('/')
            }else{
              alert("Fill all the content")
            }
            

    }
    function first(e){
       setFirst(e.target.value)
      
    } 
    function last(e){
      setLast(e.target.value)
    } 
    function email(e){
      setEmail(e.target.value)
    } 
    function confirmpass(e){
      setConfirmpass(e.target.value)
    } 
    function password(e){
      setPassword(e.target.value)
    } 



  return (
    

    <div className='signup-container'>
      
        <div className='signup-title'>
          <h1>Welcome to Info-Tech</h1>
        </div>

        <div className='signup-box'>
          <h1 className='signup-h1-log' >Signup</h1>
          <div className='first'>
          <h2>First Name</h2>
          <input placeholder='First Name' type='text' value={First} onChange={first}/>
          </div>
          <div className='last'>
          <h2>Last Name</h2>
          <input placeholder='Last Name' type='text' value={Last} onChange={last}/>
          </div>
          <div className='email'>
          <h2>Email</h2>
          <input placeholder='Email' type='Email' value={Email} onChange={email}/>
          </div>
          <div className='password'>
          <h2>Password</h2>
          <input placeholder='Password' type='Password'value={Password} onChange={password} />
          </div>
          <div className='confirmpass'>
          <h2>Confirm Password</h2>
          <input placeholder='Password' type='Password' value={Confirmpass} onChange={confirmpass}/>
          </div>
          <p className='signup-p'>Already have an account...??  <Link to={'/'} style={{color:"white"}}>Sign In</Link> </p>
            <button  onClick={click} className='signup-button'>Create account</button>
            </div>
        </div>
      
    
  )
}