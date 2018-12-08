import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = ({ siteTitle, page }) => (
  <nav className="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      {page === "/" &&
        <div className="navbar-start">
          <AnchorLink className="navbar-item" href="#background">
            Background
          </AnchorLink>

          <AnchorLink className="navbar-item" href="#story">
            Allie's Story
          </AnchorLink>

          <AnchorLink className="navbar-item" href="#proposal">
            Policy Details
          </AnchorLink>

          <AnchorLink className="navbar-item" href="#impact">
            Impact
          </AnchorLink>

          <AnchorLink className="navbar-item" href="#quiz">
            Quiz
          </AnchorLink>

          <AnchorLink className="navbar-item" href="#help">
            How to Help
          </AnchorLink>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              More
            </a>

            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/about/">
                About
              </Link>
              <Link className="navbar-item" to="/works-cited/">
                Citations
              </Link>
              <Link className="navbar-item" to="/detailed-writeup/">
                Whitepaper
              </Link>
            </div>
          </div>
        </div>
      }
    </div>
  </nav>
)

export default Header