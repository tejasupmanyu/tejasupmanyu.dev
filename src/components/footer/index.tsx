/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { footerStyles } from "./styles"
import { useStaticQuery, graphql } from "gatsby"

export const Footer: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          linksUrl
          social {
            twitter
            github
            linkedin
            instagram
            medium
          }
        }
      }
    }
  `)
  const {
    social: { twitter, instagram, github, linkedin, medium },
    linksUrl,
  } = data.site.siteMetadata
  return (
    <footer sx={footerStyles}>
      <a href={twitter} target="_blank">
        <i className="fab fa-twitter" />
      </a>
      <a href={medium} target="_blank">
        <i className="fab fa-medium-m" />
      </a>
      <a href={github} target="_blank">
        <i className="fab fa-github" />
      </a>
      <a href={instagram} target="_blank">
        <i className="fab fa-instagram" />
      </a>
      <a href={linkedin} target="_blank">
        <i className="fab fa-linkedin" />
      </a>
      <a href={"/links"}>
        <i className="fas fa-link" />
      </a>
    </footer>
  )
}
