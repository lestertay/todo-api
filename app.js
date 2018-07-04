const express    = require("express"),
	  app        = express(),
	  bodyParser = require("body-parser"),
	  todoRoutes = require("./routes/todos"),
	  port       = 3000;

// config bodyParser, to read post requests' body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
	res.send("hello");
})

app.use("/todos/api", todoRoutes);

app.listen(port, ()=>{
	console.log("running on 3000...");
})