import React from "react"
import Container from "./../container/container"
import Button from "./../button/button"
import Buttongroup from "./../button/buttongroup"
import Heroimage from "./heroimage"
import "./hero.css"



const Hero = () => (
  <div
    className="hero animated fadeIn"
    style={{
      background: `#1B393D`
    }}>
    <Container>
      <h1>Matthew Evans</h1>
      <p><span>UX Designer</span> with a strong background in <span>email</span> & <span>UI</span>.<br/>
      <span>Codes</span> and <span>animates</span> a bit here and there. </p>
      <Buttongroup>
        <Button design="primary" lift={true} link="/projects">See Projects</Button>
        <Button design="secondary" link="/about">About me</Button>
      </Buttongroup>
      <Heroimage/>
    </Container>
  </div>
)

export default Hero
