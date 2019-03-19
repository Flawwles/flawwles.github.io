import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import Hero from "../components/hero/hero"
import Container from "../components/container/container"
import Animation from "../components/animation"
import Project from "../components/project"

import pure360 from "../images/pure360.png"

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    </Layout>
    <Animation>
      <Hero/>
    </Animation>
    <Container>
      <Animation>
        <div style={{maxWidth: `70%`, margin: `80px auto`}}>
          <h1 style={{
            textAlign: `center`,
            fontWeight: `300`,
            fontSize: `32px`,
            lineHeight: `60px`,
          }}>
          I design digital products for
          <b> mobile</b> and <b>web</b>, that people love to use.</h1>
        </div>
      </Animation>
      <div style={{display: `grid`, gridTemplateColumns: `1fr 1fr`}}>
        <Project title="test" desc="Pure360" image={pure360} size="small"/>
        <Project title="test" desc="Pure360" image={pure360} size="small"/>
        <Project title="test" desc="Pure360" image={pure360} size="small"/>
        <Project title="test" desc="Pure360" image={pure360} size="small"/>
      </div>

    </Container>

    <footer>
       © {new Date().getFullYear()}, Built with
       {` `}
       <a href="https://www.gatsbyjs.org">Gatsby</a>
     </footer>
  </div>
)

export default IndexPage
