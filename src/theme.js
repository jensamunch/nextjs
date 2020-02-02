export default {
  useCustomProperties: true,
  colors: {
    text: '#000',
    background: '#fff',
    primary: 'hotpink',
    secondary: 'indigo',
    modes: {
      dark: {
        text: '#fff',
        background: '#222',
        primary: 'hotpink',
        secondary: 'indigo',
      },
    },
  },
  sizes: {
    container: 1280,
  },
  links: {
    nav: {
      darkswitcher: {
        paddingBottom: '0px',
        paddingTop: '4px'
      }
    }
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
  },
  styles: {
    root: {
      fontFamily: 'body',
      color: 'text',
      bg: 'background',
    },
    h1: {
      fontSize: [4, 5, 6],
      color: 'primary',
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      ':hover': {
        color: 'secondary',
        textDecoration: 'underline',
      },
    },
  },
}