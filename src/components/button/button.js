import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./button.css"

const Button = ({ children, design, lift, link }) => (
  <Link to={link} className={`button button__${design} button__${lift}`}>
  {children}
  </Link>
)

Button.propTypes = {
  design: PropTypes.string,
}

Button.defaultProps = {
  design: `primary`,
  lift: ``,
}

export default Button
