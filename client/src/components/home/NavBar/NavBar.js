import React from 'react';

import RecentLetOutSnapshot from './RecentLetOutSnapshot/RecentLetOutSnapshot';

// css
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navBar">
      <button className="viewLogButton">
        <i className="fas fa-clipboard-list " />
        view log
      </button>
      <RecentLetOutSnapshot />
    </div>
  );
};

export default NavBar;
