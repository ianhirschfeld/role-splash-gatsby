module.exports = {
  siteMetadata: {
    title: 'Role',
    description: 'We’re creating the world’s premier online Role Playing Community. Discover new games from the most passionate creators, meet new friends and adventure together. Anyone can play, Everyone is welcome.',
    author: '@roleapp',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#ff006b',
        display: 'minimal-ui',
        icon: 'src/images/RoleFavicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-159341071-1',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '654994141930624',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
