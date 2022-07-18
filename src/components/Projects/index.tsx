import React from 'react'
import projectObj from '../../data/projects'
import Project from '../Project'
import './styles.scss'

function Projects() {
  const projects = Object.values(projectObj)
  return (
    <section className="projects">
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.url}>
            <Project projectData={project} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
