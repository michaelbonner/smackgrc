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
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container m-auto my-8 flex flex-wrap justify-between">
          <div className="navbar-brand">
            <Link to="/" className="py-2" title="SMACK GRC Logo">
              <img src={logo} alt="SMACK GRC" style={{ width: '188px' }} />
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
            className={`flex items-center ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start text-center">
              <Link className="px-4 font-semibold text-grey-600" to="/solutions">
                Solutions
              </Link>
              <Link className="px-4 font-semibold text-grey-600" to="/about">
                GRC Requirements
              </Link>
              <Link className="px-4 font-semibold text-grey-600" to="/about">
                About
              </Link>
              <Link className="px-4 font-semibold text-grey-600" to="/blog">
                Blog
              </Link>
              <Link className="px-4 font-semibold text-grey-600" to="/contact">
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
