import React from 'react';
import './Home.scss';
import { NavLink } from 'react-router-dom';
import pavlo from '../assets/images/Pavlo1.jpg';

function Home() {
  return (
    <div className="home-wrapper">
      {/* <h1 className="home_h1">Home!!!</h1> */}
      <div className="home_container">
        {/* <img className="home_img" src={pavlo} alt="Pavlo " /> */}
        <div className="home_greeting">
          <span className="home_title">Hi, I&#39;m Pavlo.</span>
          <span className="home_subtitle"> Front-end Developer</span>
          <NavLink activeClassName="project-link" className="home_link" to="/about">read more</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
