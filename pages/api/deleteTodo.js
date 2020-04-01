const faunadb = require("faunadb")

const secret = process.env.FAUNADB_SECRET_KEY
const q = faunadb.query
const client = new faunadb.Client({ secret })

module.exports = async (req, res) => {
  console.log(req.body.id)
  try {
    const dbs = await client.query(
      q.Delete(
        q.Ref(q.Collection("Todo"), req.body.id))
    )
  } catch (e) {
    // something went wrong
    res.status(500).json({ error: e.message })
    console.log(e.message)
  }
}

