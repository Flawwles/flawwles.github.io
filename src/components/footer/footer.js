import React from "react"
import Container from "../container"
import "./footer.css"

const Footer = () => (
  <footer style={{backgroundColor: `#1b393d`, marginTop: `3rem`}}>
    <Container>
      <div className="footer">
        <div className="footer--item">
        <h3>About me</h3>
          <ul>
            <li><a href="/about/">About</a></li>
            <li><a href="https://github.com/flawwles" target="_blank" rel="noopener noreferrer">github@flawwles</a></li>
            <li><a href="matilto:matt@matt-evans.co.uk" target="_blank" rel="noopener noreferrer">matt@matt-evans.co.uk</a></li>
          </ul>
        </div>

        <div className="footer--item">
        <h3>Projects</h3>
          <ul>
            <li><a href="/pure360/">Pure360</a></li>
            <li><a href="/split-script/">Split Script</a></li>
            <li><a href="/email/">Emails Code/Design</a></li>
          </ul>
        </div>

        <div className="footer--item">
          <p>
            Copyright © {new Date().getFullYear()}<br/>
            Matt Evans
            </p>
        </div>
      </div>
    </Container>
  </footer>
)


export default Footer
