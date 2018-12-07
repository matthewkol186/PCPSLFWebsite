import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/logo.png'

const Header = ({ siteTitle }) => (
  <nav className="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </div>
  </nav>
)

export default Header