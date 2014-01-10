// requires js/template-helper.js

var TodosView = Backbone.View.extend({
  
  tagName: 'ul',
  className: 'container',
  id: 'todos',
  container: undefined,
  // template: TemplateHelper.loadTemplate('todos-template'),

  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit':   'close'
  },

  initialize: function(params) {
    // special backbone properties will be handled by default
    // so only bother with assigning custom properties.
    // * special backbone properties include:
    //   model, collection, el, id, className, tagName, attributes and events
    this.container = params.container;
  },

  render: function() {

    // var todos = this.model.get('todos');
    var todos = this.model.models;

    _.each(todos, function(todo) {

      var todoView = new TodoView({ model: todo });
      this.$el.append(todoView.render().el);

    }, this);

    this.container.append(this.el);
    return this;
  },
},
{
  // static-class level members
  globalVar: "some-global-var",

  // static-class level functions
  globalFunc: function() {
    return "some-global-func";
  },
}
);