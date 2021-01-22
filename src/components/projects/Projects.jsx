import React, { useState, useEffect } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import sanityClient from '../../client';
import './Projects.scss';
import Footer from '../footer/Footer';
// import video from '../assets/video/video1.mp4';

function Projects() {
  const [projectsData, setProjects] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  const getSortedByDate = (arr) => {
    const sortCallBack = (a, b) => (a < b) - (a > b);
    return arr.sort((a, b) => sortCallBack(a.publishedAt, b.publishedAt));
  };
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "projects"]{
      title,
      subTitle,
      slug,
      publishedAt,
      mainImage{
        asset->{
          "id": _id,
          url
        },
        alt
      },
      "stack": categories[]->{
        "id": _id,
        title},
      description,
      projectUrl
    }`,
      )
      .then((data) => {
        setProjects(getSortedByDate(data));
        // setIsLoading(false);
      });
    // console.log(projectsData);
    // .then(() => console.log(projectsData));
    // <video src="https://traversymedia.com/downloads/videos/explore.mp4" muted loop autoPlay />
    // <h5>{projectsData.slug.current}</h5>
    // <video src={video} muted loop autoPlay className="back-video" />
  }, []);
  // console.log(!isLoading ? projectsData[0].slug.current : 'df');
  return (
    <div>
      <section className="projects">
        <h2>Featured projects</h2>
        <h3>Below is a list of selected websites on which I had the pleasure of working.</h3>
        <ul className="projects_list">
          {projectsData && projectsData.map((project) => (
            <li
              className="projects_list-item"
              key={project.slug.current}
            >
              <div className="project">
                <div className="project-image_container">
                  <img
                    src={project.mainImage.asset.url}
                    alt={project.mainImage.alt}
                  />
                </div>
                <div className="project-about">
                  <div className="project_about-top">
                    <span className="project_about-title">{project.title}</span>
                    <span className="project_about-subtitle">{project.subTitle}</span>
                  </div>
                  <div className="project-discrib">
                    <BlockContent blocks={project.description} projectId="wfyf00ia" dataset="production" />
                  </div>
                  <div className="project-technologies">
                    <h5>Technologies:</h5>
                    <ul className="project_stack-list">
                      {project.stack.map((techn) => <li className="project_stack" key={techn.id}>{techn.title}</li>)}
                    </ul>
                  </div>
                  <a
                    className="project-link"
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    see website
                  </a>
                </div>
              </div>
            </li>
          ))}
          {!projectsData && <span className="loading-ring" />}
        </ul>
      </section>
      <Footer />
    </div>
  );
}

export default Projects;
