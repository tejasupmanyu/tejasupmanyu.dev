/** @jsx jsx */
import { jsx, Footer } from "theme-ui"
import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import SEO from "../../components/seo"
import { navBarStyles, linksStyles } from "../../styles"

const Links: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 250, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          blogUrl
          location
          work {
            designation
            orgUrl
            orgName
          }
          social {
            twitter
            linkedin
          }
        }
      }
    }
  `)
  const {
    social: { twitter, linkedin },
  } = data.site.siteMetadata
  return (
    <React.Fragment>
      <SEO title={`Links`} />
      <nav sx={navBarStyles}>
        <a href={twitter} target="_blank">
          Twitter
        </a>
        <a href={linkedin} target="_blank">
          LinkedIn
        </a>
        <Link to={`/blog`} className="blog-link">
          Blog
        </Link>
      </nav>
      <section className="profile" sx={linksStyles}>
        <h1>Links</h1>
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default Links
