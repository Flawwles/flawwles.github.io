import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import newyork1 from "../../images/new-york/newyork-001.jpg"
import newyork2 from "../../images/new-york/newyork-002.jpg"
import newyork3 from "../../images/new-york/newyork-003.jpg"


const Pure360 = () => (
  <Layout>
    <SEO title="New York" />
    <div style={{
      scrollSnapType: "y mandatory",
      height: 'calc(100vh - 64px)',
      overflow: 'scroll'
    }}>
      <div className="newyork"
          style={{
            backgroundImage: `url(${newyork1})`,
            backgroundSize: 'cover',
            width: "100vw",
            height: 'calc(100vh - 64px)',
            scrollSnapAlign: "start"
          }}>
      </div>
      <div className="newyork"
          style={{
            backgroundImage: `url(${newyork2})`,
            backgroundSize: 'cover',
            width: "100vw",
            height: 'calc(100vh - 64px)',
            scrollSnapAlign: "start"
          }}>
      </div>
      <div className="newyork"
          style={{
            backgroundImage: `url(${newyork3})`,
            backgroundSize: 'cover',
            width: "100vw",
            height: 'calc(100vh - 64px)',
            scrollSnapAlign: "start"
          }}>
      </div>
    </div>
  </Layout>
)

export default Pure360
