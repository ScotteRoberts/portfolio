import React from 'react'
import { ProjectProps } from './types'
import './styles.scss'

function Project({ projectData }: ProjectProps) {
  const { title, type, description, action, url, img } = projectData
  return (
    <div className="project">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="img-link"
      >
        <img src={img.src} alt={`${title} Screenshot`} />
      </a>
      <h2>{`${title} | ${type}`}</h2>
      <h3>{`${description}`}</h3>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {`${action}`} <i className="fas fa-chevron-right" />
      </a>
    </div>
  )
}

export default Project
