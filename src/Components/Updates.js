import React from 'react';
import { NavLink } from 'react-router-dom';

const Updates = () => {
  return (
    <>
      <div className="updates">
        <div className="updatesleft">
          <div className="innerup">Updates</div>
        </div>
        <div className="upinner">
          <NavLink to="/contactus">
            <p>1. Admission open for 2025 - 2026</p>
          </NavLink>
          <NavLink to="/contactus">
            <p>2. School Transport Arrangement</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Updates;
