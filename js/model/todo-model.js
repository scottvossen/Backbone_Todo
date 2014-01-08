var Todo = Backbone.Model.extend({

  defaults: {
    title: '',
    completed: false
  },

  validate: function(attributes) {
    if (attributes.title === undefined) {
        return "Remember to set a title for your todo.";
    }
  },

  initialize: function() {
    this.on("invalid", function(model, error){
        console.log(error);
    });
  },
});