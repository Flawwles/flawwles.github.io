import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import Hero from "../components/hero/hero"
import Container from "../components/container/container"
import Animation from "../components/animation"
import Project from "../components/project"
import Footer from "../components/footer"

import pure360 from "../images/pure360.png"
import vizia from "../images/vizia.png"
import axiom from "../images/axiom.png"
import split from "../images/split.png"
import breakfast from "../images/breakfast.png"
import audience from "../images/audience.png"
import email from "../images/email.png"

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" keywords={[`Matt Evans`, `portfolio`, `brighton`]} />
    </Layout>
    <Animation>
      <Hero/>
    </Animation>
    <Container>
      <Animation effect="fadeIn">
        <div style={{maxWidth: `70%`, margin: `80px auto`}}>
          <h1 style={{
            textAlign: `center`,
            fontWeight: `300`,
            fontSize: `32px`,
            lineHeight: `60px`,
          }}>
          I design digital products for
          <b> mobile</b> and <b>web</b>, that are simple and easy to use.</h1>
        </div>
      </Animation>
      <div style={{display: `grid`, gridTemplateColumns: `1fr 1fr`}}>
        <Animation effect="fadeInLeft">
          <Project
            title="Vizia / Brandwatch"
            desc="Design system that powers a suite of Brandwatch software products"
            image={vizia}
            url="/projects/axiom"
            theme="dark"
          />
        </Animation>
        <Animation effect="fadeInRight">
          <Project
            title="Audience / Brandwatch"
            desc="Simple, yet powerful tool to speed up email template creation"
            image={audience}
            url="/projects/pure360"
            theme="dark"
          />
        </Animation>
        <Animation effect="fadeInLeft">
          <Project
            title="Pure360"
            desc="Platform redesign to improve overall usablilty to create an app users look forward to working with."
            image={pure360}
            url="/projects/pure360"
          />
        </Animation>
        <Animation effect="fadeInRight">
          <Project
            title="Split Script"
            desc="Simple, yet powerful tool to speed up email template creation"
            image={split}
            url="/projects/split"
          />
        </Animation>
        <Animation effect="fadeInLeft">
          <Project
            title="Breakfast app"
            desc="App concept for breakfast reviews"
            image={breakfast}
            url="/projects/pure360"
            theme="dark"
          />
        </Animation>
        <Animation effect="fadeInRight">
          <Project
            title="Email"
            desc="Collection of email templates created for clients"
            image={email}
            url="/projects/pure360"
          />
        </Animation>
      </div>
    </Container>
    <Footer/>

  </div>
)

export default IndexPage
