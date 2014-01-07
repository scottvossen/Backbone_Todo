// Instantiate the Todo Model with a title, with the completed attribute
// defaulting to false
var myTodo = new Todo({
  title: 'Check attributes property of the logged models in the console.'
});

// create a view for a todo
var todoView = new TodoView({model: myTodo});

todoView.render();