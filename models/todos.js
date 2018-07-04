const mongoose = require("mongoose");

// define schema
const todoSchema = new mongoose.Schema({
	name: {
		type: String,
		required: "Name cannot be blank"
	},
	completed: {
		type: Boolean,
		default: false
	},
	created_Date: {
		type: Date,
		default: Date.now()
	}
});

// set todo model

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;