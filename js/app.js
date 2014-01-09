var todo1 = new Todo({
  title: 'Relax on couch.'
});
var todo2 = new Todo({
  title: 'Go to mall.'
});

var todoCollection = new TodoCollection([todo1, todo2]);


var todoView = new TodoView({ model: todo1 });

todoView.render();

var todosView = new TodosView({ model: todoCollection });

todosView.render();

console.log(todosView.el); // logs <li></li>