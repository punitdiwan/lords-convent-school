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
        <div className="navmid" >
          <h1 style={{ fontFamily: "sans-serif", fontWeight: "bolder", color: "#2F3A72" }}  ><span id='firsth'>L</span>ORDS  <span id="firsth">C</span>ONVENT <span id="firsth">S</span>CHOOL</h1>
          <p>Learning today. Leading tomorrow. Inspired Forever.</p>
        </div>
        <div className="navright">
          <div className="socialmedia ">
            <a href="https://www.facebook.com/LCSBHOPAL/" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
              <img
                src="/images1/hfb.png"
                alt="Facebook"
                datatip="FACEBOOK"
                dataplace="bottom"
                style={{
                  width: "42px",
                  height: "48px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </a>

            <a href="https://www.instagram.com/lords_conventschool?igsh=MWFnbHkxMTQyeTRhcA==" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
              <img
                src="/images1/hinsta.jpeg"
                alt="Instagram"
                datatip="INSTAGRAM"
                dataplace="bottom"
                style={{
                  width: "42px",
                  height: "48px",
                  borderRadius: "50%",
                  objectFit: "fill",  // Ensures proper image scaling without distortion
                  marginLeft: "20px"
                }}
              />
            </a>

            <a href="https://www.youtube.com/@LordsConventSchool" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
              <img
                src="/images1/hutub.jpeg"
                alt="YouTube"
                datatip="YOUTUBE"
                dataplace="bottom"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  objectFit: "fill",
                  marginLeft: "20px"
                }}
              />
            </a>
          </div>

        </div>



      </div>

    </>
  )
}

export default Navbar