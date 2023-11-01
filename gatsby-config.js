/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-blogger',
      options: {
        apiKey: 'AIzaSyBxIvXPj6cbkqMXTK0gDV9MSS5VdgVKoO4',
        blogId: '1626104544365850862'
        }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
  ],
}
