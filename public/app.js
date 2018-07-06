const url = "/todos/api"

$("document").ready(function(){
	$.getJSON(url)
	.then(makeTodo);

	// to submit form
	$("#todoInput").keypress(function(en){
		if(en.which === 13){
			createTodo();
			$(this).val("");
		}
	});

	// need to add click listener to existing element
	$(".list").on("click", "span", function(e){
		e.stopPropagation();
		let toDoId = $(this).parent().data("id");
		$.ajax({
			method: "DELETE",
			url: "/todos/api/" + toDoId 
		});
		$(this).parent().remove();
	});

	$(".list").on("click", "li", function(){
		// updateTodo($(this));
		if($(this).data("completed")){
			$(this).toggleClass("done");
			$.ajax({
				method: "PUT",
				url: "/todos/api/" + $(this).data("id"),
				data: { completed: false }
			});
		} else{
			$(this).toggleClass("done");
			$.ajax({
				method: "PUT",
				url: "/todos/api/" + $(this).data("id"),
				data: { completed: true }
			});
		}
	});
});


function makeTodo(todos){
	todos.forEach(populateTodo);
}

// works on individual task of the array
function populateTodo(singleTodo){
	let newTask = $("<li class='task'>" + singleTodo.name + " <span>X</span></li>");
	newTask.data("id", singleTodo._id);
	newTask.data("completed", singleTodo.completed);
	if(singleTodo.completed){
		newTask.addClass("done");
	}
	$(".list").append(newTask);
}

function createTodo(){
	let usrInput = $("#todoInput").val();
	$.post('/todos/api', {name: usrInput})
	.then(populateTodo);
}

function updateTodo(todo){
	if(todo.hasClass("done")){
		todo.toggleClass("done");
		$.ajax({
			method: "PUT",
			url: "todos/api/" + $(this).data("id"),
			data: {completed: false}
		});
	}
	else {
		todo.toggleClass("done");
		$.ajax({
			method: "PUT",
			url: "todos/api/" + $(this).data("id"),
			data: {completed: true}
		});
	}	
}
	
