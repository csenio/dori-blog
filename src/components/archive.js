import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Text from "./text"

const PostLink = styled(Link)`
  font-size: 35px;
  font-weight: 700;
  text-decoration: none;
  color: ${p => p.theme.colors.green};
  text-transform: capitalize;
  margin-bottom: 8px;
  display: block;
`

const post_archive_query = graphql`
  query {
    allPrismicBlogPost(sort: { order: DESC, fields: first_publication_date }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            subtitle {
              text
            }
          }
          first_publication_date(formatString: "DD MMMM YYYY")
        }
      }
    }
  }
`

const Archive = () => {
  const data = useStaticQuery(post_archive_query)

  return (
    <>
      <ul
        css="margin-top: 20px; 
      word-wrap: break-word;
      "
      >
        {data.allPrismicBlogPost.edges.map(({ node }) => (
          <li
            css="
            list-style-type: none;
            margin-bottom: 30px;
          "
            key={node.uid}
          >
            <PostLink to={`/blog/${node.uid}`}>{node.data.title.text}</PostLink>
            <Text color="grey" mb="10px" fontSize="14px" as="p">
              {node.first_publication_date}
            </Text>
            <Text fontSize="18px" as="p">
              {node.data.subtitle.text}
            </Text>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Archive
