import React from 'react'
import Link from 'gatsby-link'
import mug from '../img/publpol.jpg'

const About = () => (
  <div>
    <section className="hero is-info is-medium">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">About</h1>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-one-fifth">
            <figure className="image">
              <img src={mug} />
            </figure>
          </div>
          <div className="column is-half">
            Hi! I'm Matthew. I created this website for PUBLPOL 156: Health Care Policy and Reform, a class at Stanford that gives students an in-depth look at health care policy in America and around the world. This website is my final project: our assignment was to create a "policy paper" for a reform we wanted to see in the health care policy world. Included pictures were pulled off of Google Images, and any stories are purely fictitious meant to add to the persuasive aspect of the site. Unfortunately, PCPSLF isn't a real policy (although I think it would make a real difference for medical students and communities across the country).
          </div>
        </div>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </section>
  </div>
)

export default About
