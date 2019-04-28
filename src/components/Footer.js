import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo-light.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import linkedin from "../img/social/linkedin.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="bg-grey-500 text-white-500">
        <div className="container m-auto flex">
          <div className="content text-center">
            <img
              src={logo}
              alt="SMACK GRC"
              style={{ width: "14em", height: "10em" }}
            />
          </div>
          <div className="content text-center has-background-black text-white-500">
            <div className="container has-background-black text-white-500">
              <div className="columns">
                <div className="column is-4">
                  <section className="menu">
                    <ul className="menu-list">
                      <li>
                        <Link to="/" className="text-white-500">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link className="text-white-500" to="/about">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link className="text-white-500" to="/products">
                          Products
                        </Link>
                      </li>
                      <li>
                        <Link className="text-white-500" to="/contact/examples">
                          Form Examples
                        </Link>
                      </li>
                      <li>
                        <a
                          className="text-white-500"
                          href="/admin/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Admin
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="column is-4">
                  <section>
                    <ul className="menu-list">
                      <li>
                        <Link className="text-white-500" to="/blog">
                          Latest Stories
                        </Link>
                      </li>
                      <li>
                        <Link className="text-white-500" to="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container m-auto flex">
          <a title="facebook" href="https://www.facebook.com/SMACKGRC">
            <img
            className="m-1 fill-white"
              src={facebook}
              alt="Facebook"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
          <a title="twitter" href="https://twitter.com/smackgrc">
            <img
              className="m-1 fill-white fas fa-lg"
              src={twitter}
              alt="Twitter"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
          <a title="instagram" href="https://www.instagram.com/smackgrc/">
            <img
            className="m-1 fill-white"
              src={instagram}
              alt="Instagram"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
          <a title="linkedin" href="https://www.linkedin.com/company/smackgrc/">
            <img
            className="m-1 fill-white"
              src={linkedin}
              alt="linkedin"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
        </div>
      </footer>
    );
  }
};

export default Footer;
