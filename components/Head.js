import Head from "next/head"

const Headhtml = props => (
    <Head>
      <title> {props.title} </title>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;700&display=swap" rel="stylesheet"></link>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <link rel="shortcut icon" href="/static/favicon.ico" />
    </Head>
  );

export default Headhtml;