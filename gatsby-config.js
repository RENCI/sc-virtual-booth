module.exports = {
  siteMetadata: {
    title: `RENCI SC21 Virtual Booth`,
    siteUrl: 'http://sc.renci.org/',
    description: `RENCI's virtual booth for Supercomputing 20 Conference`,
    keywords: ['renci', 'unc'],
    author: `@mbwatson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
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
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-1SFBRPMB4K`, // your google analytics tracking id
        head: true, // Puts tracking script in the head instead of the body
        anonymize: true, // enable ip anonymization
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
