import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import Container from "../../components/container"
import SEO from "../../components/seo"
import Title from "../../components/title/"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Title title="Projects" desc="A mix of email, UI, UX, code & animation" color="dark"/>
    <Container>
      <h1>Hsisdf from the second page</h1>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default SecondPage
