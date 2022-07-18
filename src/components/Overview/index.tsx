import React from 'react'
import Work from '../Work'
import Personal from '../Personal'
import Health from '../Health'
import './styles/index.scss'

function Overview() {
  return (
    <article id="overview">
      <h2>Overview</h2>

      <article className="panel-article">
        <Work />
      </article>

      <article className="panel-article">
        <Personal />
      </article>

      <article className="panel-article">
        <Health />
      </article>

      {/* Start entering something for tabbed information */}
    </article>
  )
}

export default Overview
