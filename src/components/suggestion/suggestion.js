import React from "react"

import Animation from "./../animation"

import "./suggestion.css"

const Suggestion = ({children}) => (
  <div className="suggestion">
    <Animation effect="fadeInRight">
      <div className="suggestion--card">
      <h4>Up next</h4>
      Checkout the {children} project
      </div>
    </Animation>
  </div>
)

export default Suggestion
