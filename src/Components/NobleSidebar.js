import React from "react";
import { NavLink } from "react-router-dom"


const NobleSidebar = () => {
  return (
    <>
      <div className="rightbad">
        <div className="searchbox">
          <input type="search" style={{ border: "1px solid #D1D5DB" }} />
          <button className="btn btn-lg">
            <i className="ri-search-line"></i>
          </button>
        </div>
        <div
          className="btn btn-light nobaa text-center nobaaa1 mt-4 "
          type="button"
          style={{
            border: "1px solid #797A7B",
            color: "white",
            borderRadius: "2px",
          }}
        >
          <a className="text-center hogbtn" style={{ color: "white", }}>Lords Convent SCHOOL</a>
        </div>
        {/* <button className="nobaa mt-5">Lords Convent School</button> */}
        <div className="nobaa nobaaa">
          <div
            className="btn btn-light nobaaa1 "
            type="button"
            style={{
              border: "1px solid #797A7B",
              color: "#797A7B",
              borderRadius: "2px",
            }}
          >
            <NavLink to="/">HOME</NavLink>
          </div>

          <div
            className="btn btn-light nobaaa1 dropdown-toggle"
            type="button"
            style={{
              border: "1px solid #797A7B",
              color: "#797A7B",
              borderRadius: "2px",

            }}
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >

            <NavLink to="">ABOUT US</NavLink>
          </div>
          <div
            className="dropdown-menu p-0"
            aria-labelledby="dropdownMenuButton"
          >
            <a className="dropdown-item" to="/ourschool">
              OUR SCHOOL
            </a>
            <a className="dropdown-item" to="/boarddirector">
              BOARD OF DIRECTOR
            </a>
            <a className="dropdown-item" to="/principal">
              PRINCIPAL
            </a>
          </div>

          <div
            className="btn btn-light nobaaa1 "
            type="button"
            style={{
              border: "1px solid #797A7B",
              color: "#797A7B",
              borderRadius: "2px",
            }}
          >
            <NavLink to="/academicprocedure">ACADEMIC</NavLink>
          </div>
          <div
            className="btn btn-light nobaaa1 "
            type="button"
            style={{
              border: "1px solid #797A7B",
              color: "#797A7B",
              borderRadius: "2px",
            }}
          >
            <NavLink to="/gallery">GALLERY</NavLink>
          </div>
          <div
            className="btn btn-light nobaaa1 "
            type="button"
            style={{
              border: "1px solid #797A7B",
              color: "#797A7B",
              borderRadius: "2px",
            }}
          >
            <NavLink to="/contactus">CONTACT US</NavLink>
          </div>


          <div
            className="btn btn-light nobaa text-center hogbtn nobaaa1 mt-4 "
            type="button"
            style={{
              border: "1px solid #797A7B",
              color: "white",
              borderRadius: "2px",
            }}
          >
            <a>Did You Know?</a>
          </div>
          <div
            className="btn btn-sm p-3 didyou"
            type="button"
            style={{
              border: "1px solid #797A7B",
              color: "#797A7B",
              borderRadius: "2px",
            }}
          >
            The Lords Convent School was the first educational institute
            in
          </div>

        </div>
      </div>

      {/*  <div className="ourschoolright p-4"> 
              <div className="seacrch">
                <input
                  className="aa"
                  style={{ border: "1px solid #D1D5DB" }}
                  type="search"
                />
                <div
                  className="btn btn-lg"
                  style={{
                    backgroundColor: "white;",
                    border: "1px solid #D1D5DB",
                  }}
                >
                  
                </div>
              </div>
              <div className="navser mt-3">
                <a className="btn btn-lg px-5 noblebtn"></a>
                <a
                  className="btn btn-light"
                  type="button"
                  style={{
                    border: "1px solid #797A7B",
                    color: "#797A7B",
                    borderRadius: "2px",
                  }}
                >
                  Home
                </a>

                <a
                  className="btn btn-light dropdown-toggle"
                  style={{
                    border: "1px solid #797A7B",
                    color: "#797A7B",
                    borderRadius: "2px",
                  }}
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  ABOUT US
                </a>
                <div
                  className="dropdown-menu p-0"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    OUR SCHOOL
                  </a>
                  <a className="dropdown-item" href="#">
                    BOARD OF DIRECTOR
                  </a>
                  <a className="dropdown-item" href="#">
                    PRINCIPAL
                  </a>
                </div>
                <a
                  className="btn btn-light"
                  style={{
                    border: "1px solid #797A7B",
                    color: "#797A7B",
                    borderRadius: "2px",
                  }}
                  type="button"
                >
                  FACILITIES
                </a>

                <a
                  className="btn btn-light"
                  type="button"
                  style={{
                    border: "1px solid #797A7B",
                    color: "#797A7B",
                    borderRadius: "2px",
                  }}
                >
                  GALLERY
                </a>
                <a
                  className="btn btn-light"
                  type="button"
                  style={{
                    border: "1px solid #797A7B",
                    color: "#797A7B",
                    borderRadius: "2px",
                 

                    
                  }}
                >
                  CONTACT US
                </a>

                <a className="btn btn-lg px-5 noblebtn mt-5">DID YOU KNOW?</a>
                <div
                  className="btn btn-sm p-3 didyou"
                  type="button"
                  style={{
                    border: "1px solid #797A7B",
                    color: "#797A7B",
                    borderRadius: "2px",
                  }}
                >
                  The Nobile Public School was the first educational institute
                  in London, ON to offer Islamic Education
                </div>
              </div>
            </div>
          </div>
    
     */}
    </>
  );
};

export default NobleSidebar;
