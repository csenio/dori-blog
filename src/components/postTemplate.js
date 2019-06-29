import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import styled from "styled-components"

const MarkdownContainer = styled.div`
  h1 {
    color: red;
  }
  color: purple;
`

export const PostTemplate = ({ html, frontmatter, isPreview }) => {
  console.log("object", html, frontmatter)

  if (!frontmatter) return null

  return (
    <>
      <h1>{frontmatter.title}</h1>
      {isPreview ? (
        <MarkdownContainer>{html}</MarkdownContainer>
      ) : (
        <MarkdownContainer dangerouslySetInnerHTML={{ __html: html }} />
      )}
    </>
  )
}

const Post = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  return (
    <Layout>
      <PostTemplate html={html} frontmatter={frontmatter} />
    </Layout>
  )
}

export default Post

export const query = graphql`
  query PostQuery($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      id
      frontmatter {
        title
        date
      }
      html
    }
  }
`
