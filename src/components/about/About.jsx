import React, { useState, useEffect } from 'react';
import sanityClient from '../../client';
import './About.scss';

function About() {
  const [aboutData, setAbout] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(`*[_type == 'author']{
      name,
      slug,
      image{
        asset->{
          _id,
          url
        },
        alt
      },
      bio
    }`)
      .then((data) => setAbout(data))
      .catch((error) => console.log('error', error));
  }, []);
  console.log(aboutData && aboutData);

  return (
    <div>
      <h1>About!!!</h1>
      {aboutData && <img className="about_img" src={`${aboutData[0].image.asset.url}`} alt={aboutData[0].image.alt} />}
      {!aboutData && <span className="loading-ring" />}
      {!aboutData && (
      <div className="loading-ripple">
        <div />
        <div />
      </div>
      )}
      <span className="about-discribtion">
        I am a Junior JavaScript Front-End developer.
      </span>
      <span className="about-discribtion">
        I am going to start working as a Junior Front-End Developer in IT product this year.
      </span>
      <span className="about-discribtion">
        My goal to be in a space, where people do huge useful things and make high demands on
        themselves.
      </span>
    </div>
  );
}

export default About;
