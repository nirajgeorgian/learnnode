const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({
    "hello": "World"
  })
})

app.get('/dodo', (req, res) => {
  // make some database query
  //store the database in xyz variable
  const dbreturn = {
    "name": "dodo",
    "age": 12,
    "gender": "F"
  }

  res.send(dbreturn)

})

app.listen(3000, (err) => {
  if(err) {
    console.log(err)
  }
  console.log("Running on http://localhost:3000")
})
