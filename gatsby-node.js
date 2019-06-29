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

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicBlogPost {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  const template = path.resolve("src/templates/post.js")

  pages.data.allPrismicBlogPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
