export default {
  initialColorModeName: "light",
  colors: {
    background: "#fffffe",
    primary: "#094067",
    secondary: "#90b4ce",
    tertiary: "#ef4565",
    text: "#5f6c7b",
    highlight: "#1890ff",
    link: "#007ACC",
    modes: {
      dark: {
        background: "#0f0e17",
        text: "#a7a9be",
        primary: "#ff8906",
        secondary: "#f25f4c",
        tertiary: "#e53170",
        highlight: "#f25f4c",
        link: "#FFF",
      },
    },
  },
  fonts: {
    body:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    heading: "Monteserrat, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  radii: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ["992px"],
}
