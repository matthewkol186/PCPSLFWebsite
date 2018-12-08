import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Header extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
  }

  render() {
    let siteTitle = this.props.siteTitle;
    let page = this.props.page;
    return (
    <nav className="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navMenu" className="navbar-menu">
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
    </nav>)
  }
}

export default Header