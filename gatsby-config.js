/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `🍉farhanzip`,
    author: {
      name: `Farhan Aji`,
      summary: `a person who love build fancy techy stuff.`,
    },
    description: `Farhan's portofolio website.`,
    siteUrl: `https://farhanzip.netlify.app/`,
    social: {
      twitter: `farhanzip`,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-blogger',
      options: {
        apiKey: 'AIzaSyBxIvXPj6cbkqMXTK0gDV9MSS5VdgVKoO4',
        blogId: '1626104544365850862'
        }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Farhan's website`,
        short_name: `Farhanzip`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon.PNG`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-postcss',
  ],
}
