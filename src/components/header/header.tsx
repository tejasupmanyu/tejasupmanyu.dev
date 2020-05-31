/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import {
  rootHeaderStyles,
  linkStyles,
  headerStyles,
  miniHeaderStyles,
} from "./styles"

interface IHeaderProps {
  title: string
}

export const RootHeader: React.FC<IHeaderProps> = ({ title }) => (
  <h1 sx={rootHeaderStyles}>
    <Link sx={linkStyles} to={`/blog`}>
      {title}
    </Link>
  </h1>
)

export const Header: React.FC<IHeaderProps> = ({ title }) => (
  <h3 sx={headerStyles}>
    <Link sx={linkStyles} to={`/blog`}>
      {title}
    </Link>
  </h3>
)

export const MiniHeader: React.FC<IHeaderProps> = ({ title }) => (
  <h3 sx={miniHeaderStyles}>
    <Link sx={linkStyles} to={`/blog`}>
      {title}
    </Link>
  </h3>
)
