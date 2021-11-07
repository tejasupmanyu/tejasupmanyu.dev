import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "375px",
  md: "765px",
  lg: "1260px",
  xl: "1600px",
  "2xl": "2400px",
});

// declare a variable for fonts and set our fonts. I am using Inter with various backups but you can use `Times New Roman`. Note we can set different fonts for the body and heading.
const fonts = {
  ...chakraTheme.fonts,
  body: `Inter,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `Inter,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
};

export const theme = extendTheme({
  breakpoints,
  fonts,
  colors: {
    subTextLight: "#4A5568",
    subTextDark: "#E2E8F0",
    accent: "#5374fe",
  },
  styles: {
    global: (props) => ({
      "html, body": {
        color: mode("gray.800", "white")(props),
        backgroundColor: mode("gray.200", "black")(props),
      },
      ".mdx-post": {
        fontSize: "lg",
        h3: {
          fontSize: "3xl",
          fontWeight: "bold",
          my: "4",
        },
        h2: {
          fontSize: "4xl",
          fontWeight: "bold",
          my: "4",
        },
        p: {
          fontSize: "lg",
          lineHeight: "taller",
          my: "2",
        },
        ul: {
          my: "2",
          pl: "6",
          li: {
            my: "2",
          },
        },
        pre: {
          overflow: "auto",
        },
        code: {
          position: "relative",
          display: "inline",
          color: mode("gray.800", "white")(props),
          background: mode("gray.200", "gray.600")(props),
          fontSize: "0.9em",
          px: "4.5px",
          py: "6px",
          letterSpacing: "-0.5px",
          mx: "1px",
          my: "-1px",
          borderRadius: "3px",
          fontWeight: "600",
          fontStyle: "normal",
        },
        em: {
          fontFamily: "'Sriracha', cursive",
          color: "accent",
          fontSize: "lg",
        },
      },
    }),
  },
});
