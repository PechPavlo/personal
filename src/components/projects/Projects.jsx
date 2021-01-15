import React, { useState, useEffect } from 'react';
import sanityClient from '../../client';
import './Projects.scss';
// import video from '../assets/video/video1.mp4';

function Projects() {
  const [projectsData, setProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "projects"]{
      title,
      subTitle,
      slug,
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
        setProjects(data);
        setIsLoading(false);
      });
    // .then(() => console.log(projectsData));
    // <video src="https://traversymedia.com/downloads/videos/explore.mp4" muted loop autoPlay />
    // <h5>{projectsData.slug.current}</h5>
    // <video src={video} muted loop autoPlay className="back-video" />
  }, []);
  // console.log(!isLoading ? projectsData[0].slug.current : 'df');
  return (
    <section className="projects">
      <h1>Here are some of my projects!!!</h1>
      <ul className="projects_list">
        {projectsData && projectsData.map((project) => (
          <li
            className="projects_list-item"
            key={project.slug.current}
          >
            <div className="project">
              <img
                src={project.mainImage.asset.url}
                alt={project.mainImage.alt}
              />
              <div className="project-about">
                <span className="project_about-title">{project.title}</span>
                <span className="project_about-subtitle">{project.subTitle}</span>
                <span className="project-discrib">{project.description}</span>
                <ul className="project_stack-list">
                  {project.stack.map((techn) => <li className="project_stack" key={techn.id}>{techn.title}</li>)}
                </ul>
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
  );
}

export default Projects;
