import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll("category");
  },
  actions: {
    delete: function (category) {
      if (confirm('Are you sure?')) {
        category.destroyRecord();
      } else {
        alert("You cancelled the action!");
      }
    }
  }
});
