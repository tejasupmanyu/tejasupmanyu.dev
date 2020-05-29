import { rhythm, scale } from "../utils/typography"

export const postHeaderStyles = {
  marginTop: rhythm(1),
  marginBottom: 0,
  color: "primary",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
}

export const postDateStyles = {
  ...scale(-1 / 5),
  display: `block`,
  marginBottom: rhythm(1),
  color: "primary",
}
export const postContentStyles = {
  h1: {
    color: "primary",
  },
  h2: {
    color: "primary",
  },
  h3: {
    color: "primary",
  },
  ul: {
    paddingLeft: rhythm(1),
  },
  pre: {
    fontSize: "14px",
  },
  blockquote: {
    color: "highlight",
    borderColor: "highlight",
  },
}

export const postTimeToReadStyles = {
  ...scale(-1 / 5),
  display: `block`,
  marginBottom: rhythm(1),
  color: "primary",
  marginLeft: 2,
}

export const navigationListStyle = {
  display: `flex`,
  flexWrap: `wrap`,
  justifyContent: `space-between`,
  listStyle: `none`,
  padding: 0,
}
