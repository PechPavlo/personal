import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <div>
        <nav>
          <NavLink activeClassName="text-red" to="/" exact>
            Home
          </NavLink>
          <NavLink activeClassName="text-red" to="/about">About</NavLink>
          <NavLink activeClassName="text-red" to="/projects">Projects</NavLink>
          <NavLink activeClassName="text-red" to="/contacts">Contacts</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
