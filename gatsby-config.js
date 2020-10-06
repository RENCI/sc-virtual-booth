module.exports = {
  siteMetadata: {
    title: `RENCI Gatsby Starter`,
    siteUrl: 'https://example.com/',
    description: `RENCI Gatsby Starter`,
    keywords: ['renci', 'unc'],
    author: `@mbwatson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `renci-gatsby-starter`,
        short_name: `renci-starter`,
        start_url: `/`,
        background_color: `#00abc7`,
        theme_color: `#00abc7`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
