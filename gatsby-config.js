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
    title: `MFTECH - Your Digital Guardians`,
    description: `Gatsby React IT Startup & Technology Template`,
    author: `@Levi Oniszko`,
    siteUrl: `https://rewy-gatsby.envytheme.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-theme-portfolio-minimal`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mainframe Tech`,
        short_name: `MFTECH`,
        start_url: `/`,
        background_color: `#4f4c71`,
        theme_color: `#4f4c71`,
        display: `minimal-ui`,
        icon: `./src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: '@loniszko',
      },
    },

    // Add the Chatwoot plugin configuration here
    {
      resolve: `gatsby-plugin-chatwoot`,
      options: {
        baseUrl: "https://app.chatwoot.com", // Chatwoot base URL
        websiteToken: "WB1ZQDxjzZXDrXJF9Sqcu5aB", // Your Chatwoot website token
        includeInDevelopment: true, // Set to true if you want it included in your development build for testing
        chatwootSettings: {
          // You can specify additional Chatwoot settings here
          // For example:
          // position: "left",
          // locale: "en",
        },
      },
    },
  ],
}
