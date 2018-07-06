const express    = require("express"),
	  app        = express(),
	  bodyParser = require("body-parser"),
	  todoRoutes = require("./routes/todos"),
	  port       = 3000;

// config bodyParser, to read post requests' body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// from routes dir
app.use("/todos/api", todoRoutes);
// use files in the views dir
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
	res.sendFile("index.html");
})

app.listen(port, ()=>{
	console.log("running on 3000...");
})