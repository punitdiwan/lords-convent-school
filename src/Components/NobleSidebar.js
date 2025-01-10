import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const NobleSidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    console.log("Dropdown state changed: ", isDropdownOpen);
  }, [isDropdownOpen]);

  return (
    <>
      <div className="rightbad" style={{ position: "relative", padding: "20px", width: "250px" }}>
        <div className="searchbox" style={{ marginBottom: "20px" }}>
          <input type="search" style={{ border: "1px solid #D1D5DB", padding: "8px", width: "80%" }} />
          <button
            className="btn btn-lg"
            style={{ background: "#797A7B", color: "#fff", borderRadius: "4px", border: "none" }}
          >
            <i className="ri-search-line"></i>
          </button>
        </div>

        {/* School Name Section */}
        <div
          className="btn btn-light nobaa text-center nobaaa1 mt-4"
          type="button"
          style={{
            border: "1px solid #797A7B",
            color: "white",
            borderRadius: "2px",
            marginBottom: "20px",
            fontSize: "15px",
          }}
        >
          <a className="text-center hogbtn" style={{ color: "white" }}>
            Lords Convent School
          </a>
        </div>

        {/* Sidebar Navigation */}
        <div className="nobaa nobaaa">
          <div
            className="btn btn-light nobaaa1"
            type="button"
            style={{
              border: "1px solid #797A7B",
              color: "#797A7B",
              borderRadius: "2px",
            }}
          >
            <NavLink to="/">HOME</NavLink>
          </div>

          {/* ABOUT US Dropdown */}
          <div className="nobaaa1" style={{ position: "relative" }}>
            <button
              className="btn btn-light nobaaa1"
              type="button"
              onClick={toggleDropdown}
              style={{
                border: "1px solid #797A7B",
                color: "#797A7B",
                borderRadius: "2px",
              }}
            >
              ABOUT US
              {/* Arrow Toggle */}
              <i
                className={`ri-arrow-${isDropdownOpen ? "up" : "down"}-s-line`}
                style={{ marginLeft: "10px" }}
              ></i>
            </button>

            {/* Conditional Rendering of Dropdown */}
            {isDropdownOpen && (
              <ul
                style={{
                  listStyleType: "none",
                  padding: "10px",
                  marginTop: "5px",
                  border: "1px solid #797A7B",
                  borderRadius: "4px",
                  backgroundColor: "white",
                  position: "absolute", // Ensures dropdown is below the button
                  width: "100%", // Make it the same width as the button
                  zIndex: 1000, // Ensures it appears above other content
                }}
              >
                <li>
                  <NavLink className="dropdown-item" to="/ourschool"
                  // style={{
                  //   textDecoration: "none",
                  //   color: "#797A7B",
                  //   display: "block",
                  //   padding: "8px 10px",
                  // }}
                  >
                    OUR SCHOOL
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/boarddirector"
                  // style={{
                  //   textDecoration: "none",
                  //   color: "#797A7B",
                  //   display: "block",
                  //   padding: "8px 10px",
                  // }}
                  >
                    BOARD OF DIRECTOR
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/principal"
                  // style={{
                  //   textDecoration: "none",
                  //   color: "#797A7B",
                  //   display: "block",
                  //   padding: "8px 10px",
                  // }}
                  >
                    PRINCIPAL
                  </NavLink>
                </li>
              </ul>
            )}
          </div>

          {/* Other Sidebar Links */}
          <div
            className="btn btn-light nobaaa1"
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
            className="btn btn-light nobaaa1"
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
            className="btn btn-light nobaaa1"
            type="button"
            style={{
              border: "1px solid #797A7B",
              color: "#797A7B",
              borderRadius: "2px",
            }}
          >
            <NavLink to="/contactus">CONTACT US</NavLink>
          </div>

          {/* Did You Know Section */}
          <div
            className="btn btn-light nobaa text-center hogbtn nobaaa1 mt-4"
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
            The Lords Convent School was the first educational institute in Bhopal to Win Shooting medal in Inter School Competitions.
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
