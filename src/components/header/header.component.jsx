import React from 'react';

import './header.styles.scss';

function Header() {
  return (
    <div className="header">
      <h1 className="header-ttile">resume</h1>
      <nav className="nav">
        <ul className="nav-items">
          <li>Github</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
