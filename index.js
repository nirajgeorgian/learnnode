const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

// middleware
app.use(express.static('public'))

app.get('/', (req, res) => {
  const dirname = path.resolve(__dirname, 'public')
  console.log(dirname)
  res.send(`
    <html>
      <head>
        <link href="css/app.css" />
      </head>
      <body>
        <h1>hello</h1>
      </body>
    </html>
    `)
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
