// Instantiate the Todo Model with a title, with the completed attribute
// defaulting to false
var todo1 = new Todo({
  title: 'Check attributes property of the logged models in the console.'
});

// create a view for a todo
var todoView = new TodoView({model: todo1});

todoView.render();

console.log(todoView.el); // logs <li></li>