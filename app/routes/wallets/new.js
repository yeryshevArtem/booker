import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    create: function (wallet) {
      this.store.createRecord("wallet", {
        name: wallet.get("name"),
        balance: wallet.get("balance")
      }).save().then(function (savedModelInstance) {
        // console.log(savedModelInstance)
        // console.log(req)
      });
    },
    back: function () {
      return this.transitionTo('wallets');
    }
  }
});
