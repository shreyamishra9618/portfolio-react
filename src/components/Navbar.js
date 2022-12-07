import React from 'react'
import { NavLink } from 'react-router-dom'
// import logo from '../assets/logo.svg' 
import '../styles/Navbar.css'
const Navbar = () => {
  return (
    <nav className="topHeader">
      <div className="container">

        
        <div className="navbar">
          <NavLink to='/' className="link me-5">Home</NavLink>
          <NavLink to='/about' className="link me-5">About</NavLink>
          <NavLink to='/projects' className="link">Projects</NavLink>
          <NavLink to='/contact' className="link">
            <button className='mt-5 m-lg-0 btn btn-primary custom-btn fw-bold'>Contact me</button>
          </NavLink>
        </div>
        
     

      </div>
  </nav>
  )
}

export default Navbar

