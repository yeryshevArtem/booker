import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll("currency");
  },
  actions: {
    delete: function (currency) {
      if (confirm('Are you sure?')) {
        currency.destroyRecord();
      } else {
        alert("You cancelled the action!");
      }
    }
  }
});
