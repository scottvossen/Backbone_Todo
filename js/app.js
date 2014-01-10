// $(window).bind("load", function() {

// 	var todo1 = new Todo({
// 	  title: 'Relax on couch.'
// 	});
// 	var todo2 = new Todo({
// 	  title: 'Go to mall.'
// 	});

// 	var todoCollection = new TodoCollection([todo1, todo2]);

// 	var todosContainer = $('#todos');
// 	var todosView = new TodosView({ model: todoCollection, container: todosContainer });

// 	todosView.render();

// 	console.log(todosView.el);
// });

var app = app || {};
var ENTER_KEY = 13;

$(function() {

// Kick things off by creating the **App**.
new app.AppView();

});