import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll("outcome");
  },
  actions: {
    delete: function (outcome) {
      if (confirm('Are you sure?')) {
        outcome.destroyRecord();
      }
    }
  }
});
