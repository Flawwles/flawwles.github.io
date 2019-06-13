import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Container from "./../container"
import "./header.css"

const Header = ({ siteTitle }) => (
    <header
      style={{
        background: `white`,
        zIndex: `999`,
        position: `relative`,
        border: `1px solid #e7e7e7`
      }}
    >
    <Container>
      <div className="header">
        <span className="header-brand">
          <Link
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </span>
        <ul className="header-navigation">
          <li>
            <Link to="/"
                  className="header-navigation--link"
                  activeClassName="header-navigation--link-active">
               Home
            </Link>
          </li>
          <li>
            <Link to="/projects"
                  className="header-navigation--link"
                  activeClassName="header-navigation--link-active">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/about"
                  className="header-navigation--link"
                  activeClassName="header-navigation--link-active">
              About
            </Link>
          </li>
          <li>
            <Link to="/tips"
                  className="header-navigation--link"
                  activeClassName="header-navigation--link-active">
              Design Tips
            </Link>
          </li>
        </ul>
      </div>
      </Container>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
