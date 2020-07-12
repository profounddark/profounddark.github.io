/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'profounddark.dev',
    author: 'A. J. Asplund',
    year: '2020',
    menuLinks: [
      {
        name: 'Projects',
        link: '/projects'
      },
      {
        name: 'Blog',
        link: '/blog'
      },
      {
        name: 'About',
        link: '/about'
      }
    ]
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-transition-link`
  ],
}
