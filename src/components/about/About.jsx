import React from 'react';
import './About.scss';
import Footer from '../footer/Footer';
import pavlo from '../../assets/images/Pavlo1.jpg';

function About() {
  // import React, { useState, useEffect } from 'react';
// import sanityClient from '../../client';
  // import React, { useState, useEffect } from 'react';
  // const [aboutData, setAbout] = useState(null);
  // useEffect(() => {
  //   sanityClient
  //     .fetch(`*[_type == 'author']{
  //     name,
  //     slug,
  //     image{
  //       asset->{
  //         _id,
  //         url
  //       },
  //       alt
  //     },
  //     bio
  //   }`)
  //     .then((data) => setAbout(data))
  //     .catch((error) => console.log('error', error));
  // }, []);
  // console.log(aboutData && aboutData);
  // {aboutData && <img className="about_img" src={`${aboutData[0].image.asset.url}`}
  //  alt={aboutData[0].image.alt} />}
  // {!aboutData && <span className="loading-ring" />}
  // {!aboutData && (
  // <div className="loading-ripple">
  //   <div />
  //   <div />
  // </div>
  // )}

  return (
    <div className="about">
      <div className="about_container">
        <img className="about_img" src={pavlo} alt="Pavlo" />
        <div className="about_discribtion">
          <h1>ABOUT ME</h1>
          <span className="about_discribtion-item">
            I&#39;m a Junior Front-End developer.
          </span>
          <span className="about_discribtion-item">
            I&#39;m going to start working as a Junior Front-End Developer in IT product this year.
          </span>
          <span className="about_discribtion-item">
            My goal to be in a space, where people do huge useful things and make high demands on
            themselves.
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
