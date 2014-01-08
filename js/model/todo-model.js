var Todo = Backbone.Model.extend({

  defaults: {
    title: '',
    completed: false
  },

  initialize: function() {
    console.log('This model has been initialized.');
  }
});