import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord("wallet");
  },
  actions: {
    create: function (wallet) {
      function getRandomArbitrary(min, max) {
        var random =  Math.random() * (max - min) + min;
        var roundRandom = Math.round(random);
        return roundRandom;
      };
      this.store.createRecord("wallet", {
        id:  getRandomArbitrary(1, 100),
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
