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
  console.log(aboutData && aboutData[0].bio);

  return (
    <div>
      <h1>About!!!</h1>
      {aboutData && <img className="about_img" src={`${aboutData[0].image.asset.url}`} alt={aboutData[0].image.alt} />}
      {!aboutData && <span className="loading-ring" />}
    </div>
  );
}

export default About;
