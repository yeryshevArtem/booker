import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll("wallet");
  },
  actions: {
    delete: function (wallet) {
      if (confirm('Are you sure?')) {
        wallet.destroyRecord();
      }
    }
  }
});
