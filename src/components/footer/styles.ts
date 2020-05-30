export const footerStyles = {
  fontSize: 4,
  display: "flex",
  justifyContent: "center",
  py: 2,
  px: 4,
  a: {
    color: "secondary",
    mx: 2,
  },
  "a:hover": {
    color: "primary",
  },

  "@media screen and (min-width:992px)": {
    justifyContent: "flex-end",
  },
}
