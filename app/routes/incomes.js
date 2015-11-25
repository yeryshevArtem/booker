import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll("income");
  },
  actions: {
    delete: function (income) {
      if (confirm('Are you sure?')) {
        income.destroyRecord();
      }
    }
  }
});
