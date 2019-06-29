import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { slugify } from "helpers"

const post_archive_query = graphql`
  query {
    allPrismicBlogPost(sort: { order: ASC, fields: first_publication_date }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
          }
        }
      }
    }
  }
`

const Archive = () => {
  const data = useStaticQuery(post_archive_query)

  return (
    <>
      <aside>
        <h3>Archive</h3>
        <ul>
          {data.allPrismicBlogPost.edges.map(({ node }) => (
            <li key={node.uid}>
              <Link to={`/blog/${node.uid}`}>{node.data.title.text}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}

export default Archive
