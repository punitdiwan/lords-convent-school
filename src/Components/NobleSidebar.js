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
          {/* Replace <a> with a button if it does not link anywhere */}
          <button className="text-center hogbtn" style={{ color: "black " }}>
            Lords Convent School
          </button>
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
                  <NavLink className="dropdown-item" to="/ourschool">
                    OUR SCHOOL
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/boarddirector">
                    BOARD OF DIRECTOR
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/principal">
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
            {/* Replace <a> with a button for better accessibility */}
            <button>Did You Know?</button>
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
            The lord's convent school was the first educational institute in Bhopal to provide shooting facilities.
          </div>
        </div>
      </div>
    </>
  );
};

export default NobleSidebar;
