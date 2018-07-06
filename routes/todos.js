// store all routes in a router object
const express = require("express"),
	  router  = express.Router(),
	  db      = require("../models");

// RESTful routes: CRUD, create(2) read update(2) delete
router.get("/", function(req, res){
	db.Todo.find()
	.then(function(todo){
		res.json(todo);
	})
	.catch(function(e){
		throw e;
	})
});

router.post("/", function(req, res){
	// creates new todo schema object using mongodb's create method
	db.Todo.create(req.body)
	.then(function(todo){
		res.status(201).json(todo);
	})
	.catch(function(err){
		res.send(err);
	})
});

// Show route (here for REST structural purpose)
router.get("/:todoId", function(req, res){
	db.Todo.findById(req.params.todoId)
	.then(function(todo){
		res.json(todo);
	})
	.catch(function(e){
		res.send(e);
	})
})

// Put route, to edit the objects
router.put("/:todoId", function(req, res){
	db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
	.then(function(todo){
		res.json(todo);
	})
	.catch(function(e){
		res.send(e);
	})
});

router.delete("/:todoId", function(req, res){
	db.Todo.remove({_id: req.params.todoId})
	.then(function(){
		res.json({message: 'deleted todo' });
	})
	.catch(function(err){
		res.send(err);
	})
});
module.exports = router;
