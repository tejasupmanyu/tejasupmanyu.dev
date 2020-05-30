/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import { bioContainerStyles, profileImageStyles } from "./styles"

const Bio: React.FC = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div sx={bioContainerStyles}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        sx={profileImageStyles}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Personal blog by{"  "}
        <Link to={"/"}>
          <strong>{author}</strong>
        </Link>
        , mobile and web developer from Bengaluru, India and a UI/UX enthusiast.
        In ❤️ with all things javascript.
      </p>
    </div>
  )
}

export default Bio
