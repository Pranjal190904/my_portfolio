import React from 'react'
import "./experience.css"
import { BsPatchCheckFill } from "react-icons/bs"

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Skills</h2>
      <div className="container experience_container">
        <div className="experience_backend">
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Express.js</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>ReactJs</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>API Testing</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Postman</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Git</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>C++</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
