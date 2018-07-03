const express    = require("express"),
	  app        = express(),
	  bodyParser = require("body-parser"),
	  port       = 3000;


app.get("/", function(req, res){
	res.send("hello");
})


app.listen(port, ()=>{
	console.log("running on 3000...");
})