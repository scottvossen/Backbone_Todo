// requires js/template-helper.js

var TodosView = Backbone.View.extend({
  
  tagName: 'ul',
  className: 'container',
  id: 'todos',

  // template: TemplateHelper.loadTemplate('todos-template'),

  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit':   'close'
  },

  initialize: function() {
    this.$el = $('#todos');
  },

  render: function() {

    // Assume our model exposes the todos we will
    // display in our list
    // var todos = this.model.get('todos');
    var todos = this.model.models;

    // Loop through each of our todos using the Underscore
    // _.each iterator
    _.each(todos, function(todo){

      var todoView = new TodoView({ model: todo });

      // The todoView's DOM element is appended after it
      // has been rendered. Here, the 'return this' is helpful
      // as the todoView renders its model. Later, we ask for 
      // its output ("el")
      this.$el.append(todoView.render().el);
    }, this);
  },
});