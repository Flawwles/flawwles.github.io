import React from "react"

import Layout from "../../../components/layout"
import Container from "../../../components/container"
import Footer from "../../../components/footer"
import Button from "../../../components/button/button"
import Animation from "../../../components/animation"
import SEO from "../../../components/seo"

import splitStyles from "./split.module.css"

import splitflow from "./img/flow.svg"
import splitlogo from "./img/split.svg"

import capture from "./img/capture.svg"
import chop from "./img/chop.svg"
import save from "./img/save.svg"
import html from "./img/html.svg"
import splitVideo from "./img/split-script-edit.mp4"

const SplitScript = () => (
  <Layout>
    <div className={splitStyles.split}>
      <SEO title="Split Script" />
      <div className={splitStyles.stripe}></div>
      <Animation effect="fadeIn">
        <Container>
          <div className={splitStyles.grid}>
            <div className={splitStyles.grid50}>
              <div className={splitStyles.titles}>
                <img src={splitlogo} alt="splitlogo"/>
                <h1>Split Script</h1>
              </div>
              <p>While working at Pure360 I created a number of email templates for clients, part of what we delivered to customers was a simple to use tool to create templates.</p>
              <p>The email builder had a sidebar which displayed a list of all avalible blocks and a thumbnail sized image preview.</p>
              <p>The SplitScript was an internal tool I build to take a large email template - Chop it into smaller parts and generate the screenshots.</p>
              <ul>
                <li>Saves time - Screenshotting and resizing the images was a slow task</li>
                <li>Runs in browser - giving access to the whole team</li>
              </ul>
              <Button link="https://github.com/Flawwles/emailsplit/tree/express">View on Github</Button>
              <div className={splitStyles.video}>
                <video src={splitVideo} autoplay></video>
              </div>
            </div>
            <div className={splitStyles.grid50}>
              <img src={splitflow} alt="splitflow" className={splitStyles.splitflow}/>
            </div>
          </div>
        </Container>
      </Animation>
    </div>
    <Container>
      <div className={splitStyles.titleblock}>
        <h3>Take <span style={{textDecoration: "line-through"}}>two</span> three</h3>
        <p>I have used this tool to help increase my Javasript knowledge, I've rebuilt this a few times using different libiries each time.</p>
      </div>
    </Container>

    <Container>
      <div className={splitStyles.cards}>
        <div className={splitStyles.card}>
          <div className={splitStyles.cardimage}>
            <img src={html} alt=""/>
          </div>
          <div className={splitStyles.cardtext}>
            <h3>Full email template loaded</h3>
            <p>Using a simple landing page, all you need to do is drag and drop your HTML file to get started</p>
          </div>
        </div>

        <div className={splitStyles.card} style={{borderColor: "#6764cb"}}>
          <div className={splitStyles.cardimage}>
            <img src={chop} alt=""/>
          </div>
          <div className={splitStyles.cardtext}>
            <h3>Chop</h3>
            <p>Using cheerio the full html email is split into sections around the class .backgroundTable</p>
          </div>
        </div>

        <div className={splitStyles.card} style={{borderColor: "#319dce"}}>
          <div className={splitStyles.cardimage}>
            <img src={save} alt=""/>
          </div>
          <div className={splitStyles.cardtext}>
            <h3>Save</h3>
            <p>The script empties the folder from any previous runs - Then saves each ‘block’ of HTML as a new file</p>
          </div>
        </div>

        <div className={splitStyles.card} style={{borderColor: "#add8eb"}}>
          <div className={splitStyles.cardimage}>
            <img src={capture} alt=""/>
          </div>
          <div className={splitStyles.cardtext}>
            <h3>Capture</h3>
            <p>All the newley created HTML files are now processed by Puppeter to screenshot them and crop them to the right size.</p>
          </div>
        </div>
      </div>

      <div className={splitStyles.tables}>
        <div className={splitStyles.table}>
          <table>
            <tr>
              <th>cheerio</th>
              <td>Find the tables with the class names</td>
            </tr>
            <tr>
              <th>express</th>
              <td>Enabled the web interface side of things</td>
            </tr>
            <tr>
              <th>glob</th>
              <td>Simple way to access folders and delete files</td>
            </tr>
          </table>
        </div>

        <div className={splitStyles.table}>
          <table>
            <tr>
              <th>nodejs</th>
              <td>Server side JS makes it all possible</td>
            </tr>
            <tr>
              <th>Puppeteer</th>
              <td>The power behind the screenshots</td>
            </tr>
            <tr>
              <th>zip-local</th>
              <td>Creates a zip file ready to be downloaded</td>
            </tr>
          </table>
        </div>
      </div>
    </Container>
    <Footer/>
  </Layout>
)

export default SplitScript
