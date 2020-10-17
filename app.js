var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("landing");
});

app.listen(8080, function () {
  console.log("LISTENING");
});
