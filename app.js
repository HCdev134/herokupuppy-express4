var express = require("express"); 
var path = require("path");
var ejs = require("ejs");
// var morgan = require("morgan")
var helmet = require("helmet");
var PORT = process.env.port || 5000;

var app = express()


// app.engine("ejs", ejs({defaultLayout: "main"}));
app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, "/public")));

// morgan go before helmet and after express Static
// app.use(morgan("tiny"));
app.use("/stylesheets", express.static(__dirname + '/styles'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/javascripts", express.static(__dirname + '/scripts'));

// TODO: write our own logger since morgan cant be used in prod, and we not spen muney 
(function(){
  console.log("server running, function immediately", PORT);
})()


app.use(helmet())
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + 'public/index.html'));
});
  // add other routes below

app.get("/pageone", function(req, res){
    res.render("index");
});

app.get("/instruments", function(req, res){
   // res.redirect("content.html");
    res.render("instruments",
    // object dummy data
     {
      info: "Instruments Page",
      instrumentArr: ["Drums", "EDM pad", "Drum pad", "digital guitar", "scale mixer"],
      unsplashURIs: ["unsplash api 1", "unsplash api 2"]
     }
    ),
    console.log('redirect attempt, redirecting...'); 
   
});

// FIX *** IMPORTANT - Question: NO CALLBACK IN PROD

// COMMIT THIS 
  var port_number = app.listen(process.env.PORT || 3000);
  app.listen(port_number);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// DEBUG MODE ONLY, DO NOT COMMIT 

// ~~~~~~~~~~~~~~~~
// DONT COMMIT THIS 
// app.listen(PORT, function(){
//      console.log(`app listening on http://localhost:${PORT}`);
// });
