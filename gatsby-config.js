const path = require("path")

module.exports = {
  siteMetadata: {
    title: `dori`,
    description: `Personal website of Jesco Wüster.`,
    author: `@jescowuester`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          components: path.resolve(__dirname, "src/components"),
          context: path.resolve(__dirname, "src/context"),
          helpers: path.resolve(__dirname, "src/helpers"),
          hooks: path.resolve(__dirname, "src/hooks"),
          pages: path.resolve(__dirname, "src/pages"),
          images: path.resolve(__dirname, "src/images"),
        },
        extensions: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dori's site`,
        short_name: `dori`,
        start_url: `/`,
        background_color: `#40a798`,
        theme_color: `#40a798`,
        display: `minimal-ui`,
        icon: `src/images/seedling.svg`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
        /* eslint-disable */
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-136852402-2",
      },
    },
    // {
    //   resolve: `gatsby-plugin-create-client-paths`,
    //   options: { prefixes: [`/blog/*`] },
    // },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
