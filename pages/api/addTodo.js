const faunadb = require("faunadb")

const secret = process.env.FAUNADB_SECRET_KEY
const q = faunadb.query
const client = new faunadb.Client({ secret })

module.exports = async (req, res) => {
  console.log(req.body.title)

  try {
    const dbs = await client.query(
      q.Create(q.Collection("Todo"), {
        data: { 
          title: req.body.title,
          completed: req.body.completed
        },
      })
    )
  } catch (e) {
    // something went wrong
    res.status(500).json({ error: e.message })
  }
}
