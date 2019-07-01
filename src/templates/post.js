import React from "react"
import { graphql } from "gatsby"
import Layout from "components/layout"
import Img from "gatsby-image"
import Text from "components/text"

const Post = ({ data: { prismicBlogPost } }) => {
  const { data } = prismicBlogPost
  return (
    <Layout isWhite>
      <Text fontWeight="600" my="20px" textAlign="center" as="h1">
        {data.title.text}
      </Text>
      <Text my="20px" textAlign="center" color="grey" as="p">
        {prismicBlogPost.first_publication_date}
      </Text>
      {data.head_image.localFile && (
        <Img
          css="margin-bottom: 40px"
          fluid={data.head_image.localFile.childImageSharp.fluid}
        />
      )}
      <Text fontWeight="600" my="20px" textAlign="center" as="h2">
        {data.title.subtitle}
      </Text>
      <div
        css="
      p{
        font-size: 20px;
        line-height: 1.4;
        margin-bottom: 1em;
      }
      h2{
        font-size: 28px;
        line-height: 2;
      }
      "
        dangerouslySetInnerHTML={{ __html: data.content.html }}
      />
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
        subtitle {
          text
        }
        content {
          html
        }
        head_image {
          localFile {
            childImageSharp {
              fluid(traceSVG: { color: "#40a798" }, maxWidth: 2000) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
      first_publication_date(formatString: "DD MMMM YYYY")
    }
  }
`
