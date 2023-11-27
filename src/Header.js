import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header-container" style={{ marginLeft: "-24px" }}>
        <Link className="nav-link" to="/about">
          <img className="site-logo header-item" src="/jcdev-logo-smaller.jpeg" width="30" height="30" alt="" />
        </Link>
        <h1 className="header-item">Joe Clark</h1>
        <span className="header-item">Full Stack Development</span>
      </div>
    </header>
  );
}

export default Header;