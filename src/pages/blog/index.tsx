/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { Link, graphql } from "gatsby"
import Bio from "../../components/bio/bio"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { postHeaderStyles, postHeaderTextStyles } from "../../styles"

interface Props {
  data: {
    allMarkdownRemark: any
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const BlogIndex = ({ data }: Props) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  if (typeof window !== `undefined`) {
    return (
      <Layout location={window.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h2 sx={postHeaderStyles}>
                <Link sx={postHeaderTextStyles} to={node.fields.slug}>
                  {title}
                </Link>
              </h2>
              <Flex sx={{ marginBottom: 2 }}>
                <small>{node.frontmatter.date} | </small>
                <small sx={{ marginLeft: 1 }}>
                  {node.timeToRead} minute read
                </small>
              </Flex>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </Layout>
    )
  } else {
    return <SEO title="All posts" />
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          timeToRead
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
