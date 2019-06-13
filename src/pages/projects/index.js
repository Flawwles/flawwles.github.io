import React from "react"

import Layout from "../../components/layout/layout"
import Container from "../../components/container"
import Animation from "../../components/animation"
import Project from "../../components/project"
import SEO from "../../components/seo"
import Title from "../../components/title/"

import pure360 from "../../images/pure360.png"
import split from "../../images/split.png"
import breakfast from "../../images/breakfast.png"
import email from "../../images/email.png"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Title title="Projects" desc="A mix of email, UI, UX, code & animation" color="dark"/>
    <Container>
      <Animation effect="fadeInLeft">
      <h3>Main Projects</h3>
      </Animation>
      <div style={{display: `grid`, gridTemplateColumns: `1fr 1fr 1fr 1fr`}}>
        <Animation effect="fadeInLeft">
          <Project
            title="Pure360"
            desc="Platform redesign to improve overall usablilty & tool users look forward to opening"
            image={pure360}
            size="small"
            url="/projects/pure360"
          />
        </Animation>
        <Animation effect="fadeInLeft">
          <Project
            title="Split Script"
            desc="Simple, yet powerful tool to speed up email template creation"
            image={split}
            size="small"
            url="/projects/pure360"
          />
        </Animation>
        <Animation effect="fadeInLeft">
          <Project
            title="Pure360"
            desc="Platform redesign to improve overall usablilty & tool users look forward to opening"
            image={pure360}
            size="small"
            url="/projects/pure360"
          />
        </Animation>
        <Animation effect="fadeInLeft">
          <Project
            title="Split Script"
            desc="Simple, yet powerful tool to speed up email template creation"
            image={split}
            size="small"
            url="/projects/split"
          />
        </Animation>
        <Animation effect="fadeInRight">
          <Project
            title="Breakfast app"
            desc="App concept for breakfast reviews"
            image={breakfast}
            size="small"
            url="/projects/pure360"
            theme="dark"
          />
        </Animation>
        <Animation effect="fadeInRight">
          <Project
            title="Email"
            desc="Collection of email templates created for clients"
            image={email}
            size="small"
            url="/projects/pure360"
          />
        </Animation>
      </div>
      <br/>
      <h3>Dribble</h3>
    </Container>
  </Layout>
)

export default ProjectsPage
