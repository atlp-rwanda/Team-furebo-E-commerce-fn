import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/profile/Navigator.css';

const Navigator = () => {
  return (
    <div data-testid="navigator" className="navigator-container">
      <NavLink
        to="/view-basic"
        className={({ isActive }) => (isActive ? 'link-active' : 'link')}
      >
        Basic Info
      </NavLink>
      <NavLink
        to="/view-essential"
        className={({ isActive }) => (isActive ? 'link-active' : 'link')}
      >
        Essential Info
      </NavLink>
    </div>
  );
};

export default Navigator;
