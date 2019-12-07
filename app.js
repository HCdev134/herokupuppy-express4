var express = require("express"); 
var path = require("path");
var ejs = require("ejs");
var PORT = process.env.port || 8080;

var app = express()


// app.engine("ejs", ejs({defaultLayout: "main"}));
app.set("view engine", "ejs");


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

app.get("/pageone", function(req, res){
    res.render("index");
});

// FIX *** IMPORTANT - Question: NO CALLBACK IN PROD

// COMMIT THIS 
//   var port_number = app.listen(process.env.PORT || 3000);
//   app.listen(port_number);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// DEBUG MODE ONLY, DO NOT COMMIT 

// ~~~~~~~~~~~~~~~~
// DONT COMMIT THIS 
app.listen(PORT, function(){
     console.log(`app listening on http://localhost:${PORT}`);
});
