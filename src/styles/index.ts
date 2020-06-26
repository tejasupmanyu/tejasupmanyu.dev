import { rhythm, scale } from "../utils/typography"

export const postHeaderStyles = {
  ...scale(0.75),
  marginBottom: rhythm(1 / 4),
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
}

export const postHeaderTextStyles = {
  color: "highlight",
  boxShadow: "none",
}

export const navBarStyles = {
  display: "flex",
  justifyContent: "flex-end",
  margin: 2,
  px: 3,

  a: {
    mx: 2,
    p: 1,
    cursor: "pointer",
    color: "link",
  },

  ".blog-link": {
    backgroundColor: "tertiary",
    color: "white",
    px: 2,
    borderRadius: 2,
  },
}

export const profileImageStyles = {
  marginRight: rhythm(1 / 2),
  marginBottom: 0,
  borderRadius: `50%`,
  width: "150px",
  height: "150px",

  "@media screen and (min-width: 992px)": {
    width: "250px",
    height: "250px",
  },
}

export const profileStyles = {
  display: "flex",
  "flex-direction": "column",
  alignItems: "center",
  padding: 4,
  pb: 1,

  ".bio": {
    textAlign: "center",
    px: 2,
    py: 4,
    ".author-name": {
      color: "primary",
      my: 2,
    },
    ".info": {
      my: 2,
      fontFamily: "monospace",
    },
  },

  "@media screen and (min-width: 992px)": {
    "flex-direction": "row",
    pb: 4,
    alignItems: "unset",
    ".bio": {
      textAlign: "left",
    },
  },
}

export const introductionStyles = {
  px: 4,
  py: 1,
  width: "100%",
  p: {
    fontSize: 2,
    fontFamily: "monospace",
  },

  "@media screen and (min-width: 992px)": {
    width: "80%",
    py: 3,
    p: {
      fontSize: 3,
    },
  },
}

export const linksStyles = {
  display: "flex",
  "flex-direction": "column",
  padding: 4,
  pb: 1,
  h1: {
    m: 2,
    color: "primary",
  },

  ".links": {
    width: "100%",
  },

  ".link": {
    mb: 4,
    padding: 2,
    border: "1px solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderLeft: "4px solid",
    borderLeftColor: "tertiary",
    boxShadow: "0px 6px 10px 0px rgba(0,0,0,0.1)",
    borderRadius: 2,
    minHeight: "5em",
    "&:hover": {
      boxShadow: "5px 10px 15px 5px rgba(0,0,0,0.1)",
    },

    ".title": {
      fontWeight: "bold",
      mb: 2,
      color: "primary",
    },

    ".description": {},

    ".resources": {
      mb: 2,
      ".resource": {
        display: "inline-block",
        margin: 0,
        mx: 2,
        a: {
          textDecoration: "underline",
        },
      },
    },
  },

  "@media screen and (min-width: 992px)": {
    pb: 4,
    alignItems: "unset",
    ".bio": {
      textAlign: "left",
    },

    ".links": {
      width: "50%",
    },
  },
}

export const profileImageThumbStyles = {
  marginRight: rhythm(1 / 2),
  marginBottom: 0,
  borderRadius: `50%`,
  width: "32px",
  height: "32px",

  "@media screen and (min-width: 992px)": {
    width: "72px",
    height: "72px",
  },
}

export const linksNavBarStyles = {
  display: "flex",
  justifyContent: "space-between",
  margin: 2,
  px: 3,

  a: {
    mx: 2,
    p: 1,
    cursor: "pointer",
    color: "link",
  },

  ".blog-link": {
    backgroundColor: "tertiary",
    color: "white",
    padding: 2,
    borderRadius: 2,
  },
}
