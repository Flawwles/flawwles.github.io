import React from "react"
import getClasses from "../../lib/getclasses"
import "./project.css"

const Project = ({image, title, desc, size}) => (
  <div
      className={getClasses('project', {
        small: size === 'small'
      })}>
    <div className={getClasses('project', 'titles')}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
    <div className={getClasses('project', 'image')}>
      <img src={image} />
    </div>
  </div>
)

export default Project
