/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import SEO from "../components/seo"
import {
  navBarStyles,
  profileImageStyles,
  profileStyles,
  introductionStyles,
} from "../styles"
import { Footer } from "../components/footer"

const Landing: React.FC = () => {
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
    author,
    social: { twitter, linkedin },
    work: { orgName, designation, orgUrl },
    location,
  } = data.site.siteMetadata

  return (
    <React.Fragment>
      <SEO title={`${author}`} />
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
      <section className="profile" sx={profileStyles}>
        <Image
          fixed={data.avatar.childImageSharp.fluid}
          alt={author}
          sx={profileImageStyles}
        />
        <div className="bio">
          <h1 className="author-name">{`${author}`}</h1>
          <h2 className="info">{`${designation} In ${location}`} 🇮🇳</h2>
        </div>
      </section>
      <section className="introduction" sx={introductionStyles}>
        <p>
          👋🏼 Hello there! My name is Tejas and I am a software engineer at{" "}
          <a href={orgUrl} target="_blank">
            {orgName}
          </a>
          . I am a fan of all things Javascript and in a never ending love with
          UI. I also write about my experiments, opinions and learnings around
          Javascript and the web on my <Link to={"/blog"}>blog</Link>. Besides
          work, I am a cricket 🏏 fanatic and a tennis 🎾 rookie.
        </p>
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default Landing
