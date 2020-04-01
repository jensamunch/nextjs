const faunadb = require("faunadb")

// your secret hash
const secret = process.env.FAUNADB_SECRET_KEY
const q = faunadb.query
const client = new faunadb.Client({ secret })

module.exports = async (req, res) => {
  try {
    const dbs = (todoId, completed) =>
      client.query(
        q.Update(
          q.Ref(
            q.Collection("todos"), todoId), {data: { completed: completed },
        })
      )
  } catch (e) {
    // something went wrong
    res.status(500).json({ error: e.message })
  }
}
