/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/`,
      },
     
    },

    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/files/`,
      },
    },
    
    {
      resolve: 'gatsby-plugin-web-font-loader',
        options: {
          google: {
            families: ['Six Caps', 'Josefin Slab']
          }
        }
    }
    ],
  
}
