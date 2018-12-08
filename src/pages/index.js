import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/hero'
import Background from '../components/background'
import Interview from '../components/interview'
import Proposal from '../components/proposal'
import Quiz from '../components/quiz'
import Impact from '../components/impact'
import HelpUs from '../components/helpus'

const IndexPage = () => (
  <div>
    <Hero />
    <Background />
    <Interview />
    <Proposal />
    <Impact />
    <Quiz />
    <HelpUs />
  </div>
)

export default IndexPage
