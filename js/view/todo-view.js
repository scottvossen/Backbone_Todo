var TodoView = Backbone.View.extend({

  tagName:  'li',

  // Cache the template function for a single item.
  // template: _.template( $('#todo-template').html() ),
  // template: Handlebars.compile( $("#todo-template").html() ),
  template: TemplateHelper.loadTemplate('todo-template'),

  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit':   'close'
  },

  // Called when the view is first created
  initialize: function() {
    this.$el = $('#todo');
    // Later we'll look at:
    // this.listenTo(someCollection, 'all', this.render);
    // but you can actually run this example right now by
    // calling todoView.render();
  },

  // Re-render the titles of the todo item.
  render: function() {
    this.$el.html( this.template(this.model.toJSON()));
    // $el here is a reference to the jQuery element 
    // associated with the view, template is a reference
    // to an Underscore template and toJSON() returns an 
    // object containing the model's attributes
    // Altogether, the statement is replacing the HTML of
    // a DOM element with the result of instantiating a 
    // template with the model's attributes.
    this.input = this.$('.edit');
    return this;
  },

  edit: function() {
    // executed when todo label is double clicked
    alert("edit");
  },

  close: function() {
    // executed when todo loses focus
    alert("close");
  },

  updateOnEnter: function( e ) {
    // executed on each keypress when in todo edit mode, 
    // but we'll wait for enter to get in action
    alert("updateOnEnter");
  }
});