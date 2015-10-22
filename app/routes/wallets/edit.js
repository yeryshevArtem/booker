import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find("wallet", params.id);
  },
  actions: {
    edit: function (wallet) {
      return alert("Editing wallet with id: " + wallet.get("id"));
    }
  }
});
