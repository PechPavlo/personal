import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  return (
    <header className="nav_bar-header">
      <div className="nav_wrapper">
        <nav>
          <NavLink activeClassName="nav_link-active" className="nav_link" to="/" exact>
            Home
          </NavLink>
          <NavLink activeClassName="nav_link-active" className="nav_link" to="/about">About Me</NavLink>
          <NavLink activeClassName="nav_link-active" className="nav_link" to="/projects">Projects</NavLink>
          <NavLink activeClassName="nav_link-active" className="nav_link" to="/contacts">Contacts</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
