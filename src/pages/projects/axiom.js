import React from "react"

import Layout from "../../components/layout"
import Footer from "../../components/footer"
import Container from "../../components/container"
import SEO from "../../components/seo"

import axiomStyles from "./axiom.module.css"
import brandwatchLogo from "../../images/logo.svg"
import axiomPage from "../../images/axiom-page.svg"

const Axiom = () => (
  <Layout>
    <SEO title="Axiom" description="Axiom - Design system powering the Brandwatch products" />
    <div className="axiom-background" style={{background: `#F2F2F2`}}>
      <Container>
        <div className={axiomStyles.main}>
          <div>
            <h1 className={axiomStyles.headline}>Design system</h1>
            <span><img src={brandwatchLogo} alt=""/></span>
            <h2 className={axiomStyles.headtitle}>Axiom</h2>
            <h3 className={axiomStyles.headtitle2}>Brandwatch</h3>
            <span className={axiomStyles.date}>2018/19</span>
          </div>
        </div>
      </Container>
      <img src={axiomPage} className={axiomStyles.image} alt=""/>
    </div>

    <div>
      page
    </div>
    <Footer/>
  </Layout>
)

export default Axiom
