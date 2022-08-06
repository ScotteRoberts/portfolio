import React from 'react'
import codingIcon from '../../assets/icons/coding.png'
import conversationIcon from '../../assets/icons/conversation.png'
import timeManagementIcon from '../../assets/icons/time-management.png'
import ideaIcon from '../../assets/icons/idea.png'
import planningIcon from '../../assets/icons/planning.png'
import speakingIcon from '../../assets/icons/speaking.png'
import learningIcon from '../../assets/icons/learning.png'

function Work() {
  return (
    <>
      <h3>Work</h3>
      <span className="summary">
        <em>[tl;dr]</em>
        <p className="tab">
          I am a practicing <strong>Full-Stack Engineer</strong> with a
          technical background and experience in managerial positions.
        </p>
      </span>
      <p>
        Currently, I am a Front End Software Engineer employed at {` `}
        <strong>Warner Bros. Discovery.</strong> Each engineer must apply proven
        leadership qualities, demonstrate their ability to collaborate, and
        finish required tasks with excellence.
      </p>
      <p>
        Before Warner Bros. Discovery, I received Full-Stack Web Development
        training from Talent Path, a company dedicated to provide,
        &quot;sought-after talent while creating new IT career pathways for
        entry-level professionals by hiring and developing high-potential talent
        to map to known gaps at our clients&apos; organizations&quot; (
        <a href="https://www.youracclaim.com/badges/b9bcfbd9-be9f-4ba0-af44-668bdb1cca65/public_url">
          Click to view my certificate
        </a>
        ).
      </p>
      <p>
        In addition to my technical training, I worked seven full-time summers
        for the California Junior Lifeguard Programs (CAJG) as a Lifeguard
        Instructor and for two of those summers as the Managing Director.
      </p>
      <p>Skills I will apply in your company are:</p>
      <ul className="icon-list">
        <li>
          <img width={64} height={64} src={codingIcon} alt="Coding Icon" />
          <span>App Development</span>
        </li>
        <li>
          <img
            width={64}
            height={64}
            src={conversationIcon}
            alt="Conversation Icon"
          />
          <span>Collaboration</span>
        </li>
        <li>
          <img
            width={64}
            height={64}
            src={timeManagementIcon}
            alt="Time Management Icon"
          />
          <span>Time Management</span>
        </li>
        <li>
          <img width={64} height={64} src={ideaIcon} alt="Idea Icon" />
          <span>Problem Solving</span>
        </li>
        <li>
          <img width={64} height={64} src={planningIcon} alt="Planning Icon" />
          <span>Strategic Planning</span>
        </li>
        <li>
          <img width={64} height={64} src={speakingIcon} alt="Speaking Icon" />
          <span>Public Speaking</span>
        </li>
      </ul>
    </>
  )
}

export default Work
