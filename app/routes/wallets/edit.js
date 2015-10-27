import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find("wallet", params.id);
  },
  actions: {
    edit: function (wallet) {
      var id = wallet.id;
      this.store.findRecord("wallet", id).then(function(current) {
        var name = wallet.get("name");
        var balance = wallet.get("balance");
        current.set("name", name);
        current.set("balance", balance);
        current.save();
      });
      // return alert("Editing wallet with id: " + wallet.get("id"));
    },
    back: function () {
      return this.transitionTo('wallets');
    }
  }
});
