const express = require("express")

const app = express()

if (process.env.HEROKU) {
  app.listen(process.env.PORT || 5000)
} else {
  const serverless = require('serverless-http');
  module.exports.handler = serverless(app)
}

app.use(express.static(__dirname + "/public"))

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get('/', function (req, res) {
  return res.render("index")
})

app.get('/about', function (req, res) {
  return res.render("about")
})

app.get('/works', function (req, res) {
  return res.render("works")
})