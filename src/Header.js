import React from 'react';

function Header() {
  return (
    <header>
      <div className="header-container">
        <a className="navbar-brand" href="/">
          <img className="site-logo header-item" src="/jcdev-logo-smaller.jpeg" width="30" height="30" alt="" />
        </a>
        <h1 className="header-item">Joe Clark</h1>
        <span className="header-item">Full Stack Development</span>
      </div>
    </header>
  );
}

export default Header;