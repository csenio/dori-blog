const path = require("path")

const slugify = (text = "") =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, "") // Trim - from end of text

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const slug = slugify(node.frontmatter.title)

        createPage({
          path: `/blog/${slug}`,
          component: path.resolve("./src/components/postTemplate.js"),
          context: {
            title: node.frontmatter.title,
          },
        })
      })
      resolve()
    })
  })
}
