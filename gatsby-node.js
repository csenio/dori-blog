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

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        context: path.resolve(__dirname, "src/context"),
        helpers: path.resolve(__dirname, "src/helpers"),
        hooks: path.resolve(__dirname, "src/hooks"),
        pages: path.resolve(__dirname, "src/pages"),
        images: path.resolve(__dirname, "src/images"),
      },
    },
  })
}
