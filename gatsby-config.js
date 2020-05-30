module.exports = {
  siteMetadata: {
    title: `Composè`,
    author: `Tejas Upmanyu`,
    description: `Tejas Upmanyu's Blog`,
    siteUrl: `https://tejasupmanyu.dev`,
    blogUrl: `https://blog.tejasupmanyu.dev/blog`,
    location: "Bengaluru, India",
    ogImageUrl: "https://ibb.co/SX43P64",
    work: {
      designation: "Software Engineer",
      orgUrl: "https://hashedin.com/",
      orgName: "HashedIn",
    },
    social: {
      twitter: "https://twitter.com/tejasupmanyu",
      linkedin: "https://www.linkedin.com/in/tejasupmanyu/",
      instagram: "https://www.instagram.com/tejasupmanyu/",
      github: "https://github.com/tejasupmanyu",
      medium: "https://medium.com/@tejasupmanyu",
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tejas Upmanyu | Composè`,
        short_name: `Tejas Upmanyu`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/Icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-164567288-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
