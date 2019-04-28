import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar bg-yellow-500"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container m-auto">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="SMACK GRC Logo">
              <img src={logo} alt="SMACK GRC" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start text-center">
              <Link className="navbar-item" to="/about">
                Solutions
              </Link>
              <Link className="navbar-item" to="/about">
                GRC Requirements
              </Link>
              <Link className="navbar-item" to="/products">
                About
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
