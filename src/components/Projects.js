import React from 'react'
import data from '../data.js'
import Project from './Project.js'
import '../styles/Projects.css'

const Projects = () => {
  return (
    <div className="container-fluid bg-light p-5 min-vh-100">
      {/* <InprogressProjects /> */}
      <div className="row">
        {/* <h2 className='custom-font pb-5 text-center'>Completed: </h2> */}
        {data.ProjectsData.map((project) => {
          return(
            <div className="projects" key={project.id}>
                <Project id={project.id}
                  image={project.img}
                  name={project.name}
                  stack={project.stack}
                  live={project.live}
                  source={project.source}
                  desc={project.description}
                />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects