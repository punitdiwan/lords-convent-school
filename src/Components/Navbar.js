import React from 'react'
import './css/Navbar.css'


const Navbar = () => {
  return (
    <>
      <div className="container-fluid navmain">
        <div className="navleft">
          <div className="logo">
            <img src="./images1/lords-logo-removebg-preview.png" alt="" />
          </div>
        </div>
        <div className="navmid">
          <h1><span id='firsth'>L</span>ORDS  <span id="firsth">C</span>ONVENT <span id="firsth">S</span>CHOOL</h1>
          <p>Learning today. Leading tomorrow. Inspired Forever.</p>
        </div>
        <div className="navright">
          <div className="socialmedia">
            <a href="https://www.facebook.com/LCSBHOPAL/" target="_blank" style={{ textDecoration: "none", color: "#111A5C" }}> <i className="ri-facebook-fill"></i></a>

            <a href="https://www.facebook.com/LCSBHOPAL/" target="_blank" style={{ textDecoration: "none", color: "#111A5C" }}>  <i className="ri-instagram-fill"></i> </a>
            <a href="" target="_blank" style={{ textDecoration: "none", color: "#111A5C" }}>  <i className="ri-youtube-fill"></i> </a>

          </div>
          {   /*   <div className="seacrch">
            <input className='aa' type="search" />
            <div className="btn" style={{ backgroundColor: "#F8D34D" }}>Search</div>
          </div> */}


        </div>





      </div>





    </>
  )
}

export default Navbar