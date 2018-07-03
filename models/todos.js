const mongoose = require("mongoose");

// define schema
cosnt todoSchema = new mongoose.Schema({
	name: {
		type: String,
		required: "Name cannot be blank"
	},
	completed: {
		type: boolean,
		default: false
	},
	created_Date: {
		type: Date,
		default: Date.now
	}
});

// set todo model

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;