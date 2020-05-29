import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    a: {
      boxShadow: `none`,
    },
    "a:hover": {
      cursor: "pointer",
      color: "#094067",
    },
  }
}
Wordpress2016.bodyFontFamily = ["Helvetica Neue", "helvetica"]
Wordpress2016.headerFontFamily = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Helvetica Neue",
  "sans-serif",
]

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
