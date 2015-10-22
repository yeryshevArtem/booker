import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord("wallet");
  },
  actions: {
    create: function (wallet) {
      return alert("Creating wallet with name: " + wallet.get("name"));
    }
  }
});
