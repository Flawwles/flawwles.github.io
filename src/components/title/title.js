import React from "react"
import getClasses from "../../lib/getclasses"

import Container from "../container"

import "./title.css"

const Title = ({title, desc, color}) => (
  <div className={getClasses('title', {
    dark: color === 'dark'
  })}>
  <Container>
  <h1>{title}</h1>
  <p>{desc}</p>
  </Container>
  </div>
)

export default Title
