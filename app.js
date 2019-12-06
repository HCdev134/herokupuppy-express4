var express = require("express"); 
var path = require("path");

var PORT = process.env.port || 8080;

var app = express()

app.use(express.static(path.join(__dirname)));
app.use("/styles", express.static(__dirname + '/styles'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/scripts", express.static(__dirname + '/scripts'));


// lines 10 - 18
// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + 'public/index.html'));
  });
  // add other routes below
  app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname + 'public/about.html'));
  });

  app.listen(process.env.port || PORT)
  
