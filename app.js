var express = require("express"); 
var path = require("path");

var PORT = process.env.port || 8080;

var app = express()

app.use(express.static(path.join(__dirname, "public")));


app.use("/styles", express.static(__dirname + '/styles'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/scripts", express.static(__dirname + '/scripts'));


// lines 10 - 18
// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + 'public/index.html'));
  });
  // add other routes below



  var port_number = server.listen(process.env.PORT || 3000);
  app.listen(port_number);
