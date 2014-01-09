var todo1 = new Todo({
  title: 'Relax on couch.'
});
var todo2 = new Todo({
  title: 'Go to mall.'
});

var todoCollection = new TodoCollection([todo1, todo2]);

var todosContainer = $('#todos');
var todosView = new TodosView({ model: todoCollection, container: todosContainer });

todosView.render();

console.log(todosView.el);