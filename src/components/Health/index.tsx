import React from 'react'
import improvedBehaviorIcon from '../../assets/icons/improved-behavior.png'
import improvedProductivityIcon from '../../assets/icons/productivity.png'
import reduceCostIcon from '../../assets/icons/reduce-cost.png'

function Health() {
  return (
    <>
      <h3>Health</h3>
      <span className="summary">
        <em>[tl;dr]</em>
        <p className="tab">
          A good night&apos;s rest, proper hydration, a balanced diet, and
          stretching will lead to a happier life.
        </p>
      </span>
      <p>
        Health is an important factor of everyone’s life and should be
        highlighted. According to WellSteps, a blog dedicated providing
        education on employee wellness solutions, a healthy employee has:
      </p>
      <ul className="icon-list">
        <li>
          <img
            width={64}
            height={64}
            src={improvedBehaviorIcon}
            alt="Improved Behavior Icon"
          />
          Improved Behavior
        </li>
        <li>
          <img
            width={64}
            height={64}
            src={improvedProductivityIcon}
            alt="Improved Productivity Icon"
          />
          Improved Productivity
        </li>
        <li>
          <img
            width={64}
            height={64}
            src={reduceCostIcon}
            alt="Reduce Cost Icon"
          />
          Reduced Health Costs
        </li>
      </ul>
      <p>
        I take personal pride in living a healthy, active lifestyle and practice
        healthy habits during work and personal hours.
      </p>
    </>
  )
}

export default Health
