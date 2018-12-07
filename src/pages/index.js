import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/hero'
import Background from '../components/background'
import Interview from '../components/interview'
import Proposal from '../components/proposal'
import Quiz from '../components/quiz'

const IndexPage = () => (
  <div>
    <Hero />
    <Background />
    <Interview />
    <Proposal />
    <Quiz />
    <p className="mt-1">
      <Link to="/page-2/">Go to page 2</Link>
    </p>
  </div>
)

export default IndexPage
