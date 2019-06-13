import React from "react"

import Layout from "../../../components/layout"
import Container from "../../../components/container"
import Footer from "../../../components/footer"
import Animation from "../../../components/animation"
import SEO from "../../../components/seo"
import Pure360icons from "./pure360icons"

import pure360style from "./pure360.module.css"

import pure360mockup from "./img/pure360-mockup.png"
import pure360intro from "./img/pure360-intro.png"
import pure360patternlibrary from "./img/pure360-patternlibrary.png"
import pure360research from "./img/pure360-research.png"
import pure360stand from "./img/pure360-stand.png"
import pure360axure from "./img/pure360-axure.png"

const Pure360 = () => (
  <Layout>
    <SEO title="Pure360" />
      <div className={pure360style.pure360}>
        <div className={pure360style.header}>
          <Container>
            <Animation effect="fadeIn">
            <h1>
              Email Marketing <br/>
              Platform Redesign
            </h1>
            </Animation>
            <Animation effect="fadeIn">
            <p>UX & UI - Improving the Drag & Drop email editor and overall product design.</p>
            </Animation>
          </Container>
        </div>
        <div className={pure360style.image}>
          <Container>
            <div className={pure360style.center}>
              <h2>What we delivered</h2>
            </div>
            <img src={pure360mockup} alt="pure360mockup"/>
          </Container>
          </div>
          <Container>
            <div className={pure360style.grid}>
              <div>
                <h2>Introduction</h2>
                <p>The Pure360 platfrom makes it easy to send large quantities of emails, manage your contact list & report on the results.</p>
                <p>I worked within the product team as a UX Designer where I did user research, commercial design and product design. </p>
              </div>
              <div>
                <img src={pure360intro} alt="pure360intro"/>
              </div>
            </div>
          </Container>
          <Container>
            <div className={pure360style.grid}>
              <div>
                <img src={pure360patternlibrary} alt="pure360patternlibrary"/>
              </div>
              <div className={pure360style.gridtop}>
                <h2>Pattern Library</h2>
                <p>An on-going output of the Design team was to create a pattern library, this was a collection of reusable HTML elements that followed the Brad Frosts Atomic Design.</p>
                <p>I produced designs for new components and also committed new code to the pattern library. </p>
              </div>
            </div>
          </Container>
          <Container>
            <div className={pure360style.grid}>
              <div>
                <h2>User Research</h2>
                <p>Performing User Feedback sessions & customer visits we highlighted friction points within the app, common confusions and areas for improvement. We made the rest of the product team aware of these issues and then organised internal collaborative sessions to find solutions</p>
              </div>
              <div>
                <img src={pure360research} alt="pure360intro"/>
              </div>
            </div>
          </Container>
          <Container>
            <div className={pure360style.grid}>
              <div>
                <img src={pure360stand} alt="pure360patternlibrary"/>
              </div>
              <div className={pure360style.gridtop}>
                <h2>Branding</h2>
                <p>On top of the UX Design work, I was also involved in marketing work, from creating printed guides, small adjustments to the marketing site & designing the marketing stand to be used at exhibitions.</p>
              </div>
            </div>
          </Container>
        </div>
        <div className={pure360style.icons}>
        <Container>
          <div className={pure360style.center} style={{color: "white"}}>
            <h2>Icons</h2>
            <p>After time, the icons used slowly became further and further apart in regards to style. Recreating all the icons on an 8px grid and sticking to strick rules helped bring everything inline</p>
          </div>
          <Pure360icons/>
        </Container>
      </div>
      <Container>
        <div className={pure360style.grid} style={{minHeight: "15rem"}}>
          <div>
            <h2>Colours</h2>
            <p>We worked in some new colours into an already established colour pallet - The colours were used across the product and branding</p>
          </div>
          <div>
            <div className={pure360style.colors}>
              <div>
                <div style={{background: "#213E55"}}></div>
                <span>neutral-dark</span> <br/> <span>213E55</span>
              </div>
              <div>
                <div style={{background: "#319DCE"}}></div>
                <span>info-base</span> <br/> <span>319DCE</span>
              </div>
              <div>
                <div style={{background: "#439E91"}}></div>
                <span>neutral-mid</span> <br/> <span>439E91</span>
              </div>
              <div>
                <div style={{background: "#32D478"}}></div>
                <span>success-mid</span> <br/> <span>32D478</span>
              </div>
              <div>
                <div style={{background: "#C92E47"}}></div>
                <span>danger-mid</span> <br/> <span>C92E47</span>
              </div>

            </div>
          </div>
        </div>
      </Container>
      <div>
        <Container>
          <div className={pure360style.grid}>
            <div>
              <img src={pure360axure} alt="axure"/>
            </div>
            <div className={pure360style.gridtop}>
              <h2>Protoypes</h2>
              <p>When working on projects that require either a change to a flow or a drastically new UI I always create a prototype.</p>
              <p>The protoypes I create are normally made using Sketch/Invison or Axure</p>
            </div>
          </div>
        </Container>
      </div>
    <Footer/>
  </Layout>
)

export default Pure360
