import Head from "next/head"

const Headhtml = (props) => (
  <Head>
    <title> {props.title} </title>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;700&display=swap"
      rel="stylesheet"
    ></link>
    <meta
      name="viewport"
      content="initial-scale=1.0, width=device-width"
      key="viewport"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicons/favicon-16x16.png"
    />
    <link rel="manifest" href="/favicons/site.webmanifest" />
    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
    <link rel="shortcut icon" href="/favicons/favicon.ico" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
    <meta name="theme-color" content="#ffffff" />
  </Head>
)

export default Headhtml
