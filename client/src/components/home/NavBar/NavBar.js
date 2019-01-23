import React from 'react';
import { NavLink } from 'react-router-dom';
import RecentLetOutSnapshot from './RecentLetOutSnapshot/RecentLetOutSnapshot';

// css
import './NavBar.css';

const NavBar = ({ letOuts }) => {
  return (
    <div className="navBar">
      <NavLink className="viewLogButton" to="/log">
        <i className="fas fa-clipboard-list fa-3x" />
      </NavLink>
      <RecentLetOutSnapshot letOuts={letOuts} />
    </div>
  );
};

export default NavBar;
