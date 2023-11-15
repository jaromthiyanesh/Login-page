import React from 'react'
import { Link } from 'react-router-dom';
import './login.css'

export default function Profile() {
    const first = localStorage.getItem('First');
    const last = localStorage.getItem('Last');
    const email = localStorage.getItem('Email');
    const password = localStorage.getItem('Password');
    
  return (
    <div className='profile-container'>
       
      <h1 className='profile-title-h1'>Welcome to Info-Tech</h1>
        
      <div className='profile-box'>
        <h1 className='profile-head'>Details of Your Infomation</h1>
        <div className='profile-content'>
            <h2>Name :{first + last}</h2>
            <h2>Email :{email}</h2>
            <h2>Password :{password}</h2>
            <Link to={'/'}>
            <button className='profile-button'>Logout</button>
            </Link>
        </div>
      </div>
    </div>
    
  )
}
