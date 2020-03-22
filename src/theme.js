// https://colorhunt.co/palette/238

export default {
  useCustomProperties: true,

  colors: {
    text: "#000",
    background: "#fff",
    primary: "#2b2e4a",
    secondary: "#e84545",
    tertiary: "#903749",
    quaternary: "#53354a",
    gray100: "#f7fafc",
    gray200: "#edf2f7",
    modes: {
      dark: {
        text: "#fff",
        background: "#222",
      },
    },
  },

  sizes: {
    container: 1280,
  },

  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
  },

  links: {
    nav: {
      color: "text",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
      },
    },
  },

  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background",
    },
    h1: {
      fontSize: [4, 5, 6],
      color: "primary",
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline",
      },
    },
  },
}
