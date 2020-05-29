/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import React, { CSSProperties } from "react"
import {
  layoutStyles,
  headerContainerStyles,
  toggleIconStyles,
  toggleContainerStyles,
} from "./styles"
import { Header, RootHeader } from "../header/header"
import Toggle from "../toggle/toggle"
import { Footer } from "../footer"

const moon = require("../../assets/moon.png")
const sun = require("../../assets/sun.png")

interface ILayoutProps {
  location: Location
  title: string
  children?: JSX.Element[]
}

const Layout: React.FC<ILayoutProps> = ({
  location,
  title,
  children,
}: ILayoutProps) => {
  const [colorMode, setColorMode] = useColorMode()
  const nextColorMode = colorMode === "dark" ? "light" : "dark"

  const toggleColorMode = () => {
    setColorMode(nextColorMode)
  }

  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = <RootHeader title={title} />
  } else {
    header = <Header title={title} />
  }

  return (
    <div sx={layoutStyles}>
      <header sx={headerContainerStyles}>
        {header}
        <div sx={toggleContainerStyles}>
          <Toggle
            icons={{
              checked: (
                <img
                  src={moon}
                  role="presentation"
                  sx={toggleIconStyles as CSSProperties}
                />
              ),
              unchecked: (
                <img
                  src={sun}
                  role="presentation"
                  sx={toggleIconStyles as CSSProperties}
                />
              ),
            }}
            checked={colorMode === "dark"}
            onChange={toggleColorMode}
          />
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
