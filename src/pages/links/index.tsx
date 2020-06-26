/** @jsx jsx */
import { jsx, Footer } from "theme-ui"
import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import SEO from "../../components/seo"
import Image from "gatsby-image"
import {
  linksNavBarStyles,
  linksStyles,
  profileImageThumbStyles,
} from "../../styles"
import linksData from "./links.json"

interface ISharedLink {
  title: string
  description: string
  resources: {
    label: string
    url: string
  }[]
}

const Links: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 84, maxHeight: 84) {
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
    author,
    social: { twitter, linkedin },
  } = data.site.siteMetadata

  return (
    <React.Fragment>
      <SEO title={`Links`} />
      <nav sx={linksNavBarStyles}>
        <div>
          <Link to={`/`}>
            <Image
              fixed={data.avatar.childImageSharp.fluid}
              alt={author}
              sx={profileImageThumbStyles}
            />
          </Link>
        </div>
        <div>
          <Link to={`/`} className="home-link">
            Home
          </Link>
          <a href={twitter} target="_blank">
            Twitter
          </a>
          <a href={linkedin} target="_blank">
            LinkedIn
          </a>
          <Link to={`/blog`} className="blog-link">
            Blog
          </Link>
        </div>
      </nav>
      <section className="links-container" sx={linksStyles}>
        <h1>Links</h1>
        <div className="links">
          {linksData.links.map((link: ISharedLink, index) => (
            <SharedLink {...link} key={index} />
          ))}
        </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default Links

const SharedLink: React.FC<ISharedLink> = (props: ISharedLink) => {
  const { title, description, resources } = props
  return (
    <div className="link" id={title}>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <ul className="resources">
        {resources.map(({ label, url }) => (
          <li className="resource">
            <a href={url} target="_blank">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
