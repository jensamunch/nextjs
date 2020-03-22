import Head from "next/head"

const Headhtml = props => (
    <Head>
      <title> {props.title} </title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <link rel="shortcut icon" href="/static/favicon.ico" />
    </Head>
  );

export default Headhtml;