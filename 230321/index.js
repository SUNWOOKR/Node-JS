const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.get('/user/:id', (req, res) => {
  const q = req.query
  console.log({ "name" })

  res.json({'userid': q.name })
})

app.get("/cat", (req, res) => {
  res.send({ sound: "냐옹" })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
