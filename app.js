const express = require("express")

const app = express()
app.listen(5000)

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