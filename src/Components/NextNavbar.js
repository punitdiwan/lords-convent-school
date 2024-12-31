import React from 'react'
import { NavLink } from "react-router-dom";


const NextNavbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light nextnavbar">
      <div className='navtoggle'>
      <button className="navbar-toggler shadow-none" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
      </div>
  
  <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active px-3">
        <NavLink className="nav-link" to="/"style={{color:"#2F3A72",fontWeight:"bold"}}>HOME</NavLink>
      </li>


      <li className="nav-item dropdown px-3">
        <NavLink className="nav-link dropdown-toggle" style={{color:"#2F3A72",fontWeight:"bold"}} href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ABOUT US
        </NavLink>
        <div className="dropdown-menu" style={{backgroundColor:"#2F3A72", width:"auto"}}  aria-labelledby="navbarDropdownMenuLink">
          <NavLink className="dropdown-item" style={{backgroundColor:"#2F3A72", width:"100%", border:"none",color:"white"}} to="/ourschool">OUR SCHOOL</NavLink>
          <NavLink className="dropdown-item" style={{backgroundColor:"#2F3A72", width:"100%", border:"none",color:"white"}} to="/boarddirector">BOARD OF DIRECTOR</NavLink>
          <NavLink className="dropdown-item" style={{backgroundColor:"#2F3A72", width:"100%", border:"none",color:"white"}} to="/principal">PRINCIPAL</NavLink>
        </div>
      </li>
      <li className="nav-item dropdown px-3">
        <NavLink className="nav-link dropdown-toggle"style={{color:"#2F3A72",fontWeight:"bold"}} href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ACADEMIC
        </NavLink>
        <div className="dropdown-menu" style={{backgroundColor:"#2F3A72", width:"auto"}} aria-labelledby="navbarDropdownMenuLink">
          <NavLink className="dropdown-item" style={{backgroundColor:"#2F3A72", width:"100%", border:"none",color:"white"}}  to="/academicprocedure">ACADEMIC</NavLink>
         
        </div>
      </li>
      <li className="nav-item px-3">
        <NavLink className="nav-link" style={{color:"#2F3A72",fontWeight:"bold"}} to="/gallery">GALLERY</NavLink>
      </li>
       
      <li className="nav-item px-3">
        <NavLink className="nav-link" style={{color:"#2F3A72",fontWeight:"bold"}} to="/facilities">FACILITIES</NavLink>
      </li>
      <li className="nav-item px-3">
        <NavLink className="nav-link" style={{color:"#2F3A72",fontWeight:"bold"}} to="/contactus">CONTACT US</NavLink>
      </li>
    
    </ul> 
  </div>
</nav>
    
    
    </>
  )
}

export default NextNavbar