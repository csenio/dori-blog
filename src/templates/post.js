import React from "react"
import { graphql } from "gatsby"
import Layout from "components/layout"

const Post = ({ data: { prismicBlogPost } }) => {
  const { data } = prismicBlogPost
  return (
    <Layout>
      <h1>{data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicBlogPost(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`
