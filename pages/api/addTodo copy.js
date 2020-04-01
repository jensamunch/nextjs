const faunadb = require("faunadb")

// your secret hash
const secret = process.env.FAUNADB_SECRET_KEY
const q = faunadb.query
const client = new faunadb.Client({ secret })

export default (req, res) => {
  console.log('api', req.method, req.params)
  /* try {
    const dbs = title =>
    console.log(title)
    client.query(
      q.Create(
        q.Collection('todos'),
        { data: { title: 'What I had for breakfast ..' } },
      )
    )
    .then((ret) => console.log(ret))
  } catch (e) {
    // something went wrong
    res.status(500).json({ error: e.message })
  } */
}


