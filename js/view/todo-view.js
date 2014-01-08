var TodoView = Backbone.View.extend({
  
  tagName: 'li',
  // className: 'container',
  // id: 'todo1',

  template: TemplateHelper.loadTemplate('todo-template'),

  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit':   'close'
  },

  initialize: function() {
    this.$el = $('#todo');
    // Later we'll look at:
    // this.listenTo(someCollection, 'all', this.render);
    // but you can actually run this example right now by
    // calling todoView.render();
  },

  // Re-render the titles of the todo item.
  render: function() {
    this.$el.html( this.template(this.model.attributes));
    this.input = this.$('.edit');
    return this;
  },

  edit: function() {
    alert("edit");
  },

  close: function() {
    alert("close");
  },

  updateOnEnter: function(e) {
    alert("updateOnEnter");
  }
});