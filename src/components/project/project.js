import React from "react"
import { Link } from "gatsby"
import getClasses from "../../lib/getclasses"
import "./project.css"

const Project = ({image, title, desc, size, theme, url}) => (
  <Link to={url}>
  <div
      className={getClasses('project', {
        small: size === 'small',
        dark: theme === 'dark'
      })}>
    <div className={getClasses('project', 'image')}>
      <img src={image} alt={image}/>
    </div>
    <div className={getClasses('project', 'titles')}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </div>
  </Link>
)

export default Project
