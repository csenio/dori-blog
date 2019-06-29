import React from "react"
import Archive from "components/archive"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Archive />
  </Layout>
)

export default IndexPage
