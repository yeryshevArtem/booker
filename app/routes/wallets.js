import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll("wallet");
  },
  actions: {
    delete: function (walletId) {
      return alert("Delete wallet with id: " + walletId);
    }
  }
});
