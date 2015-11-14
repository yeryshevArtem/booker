import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Route.extend({
  actions: {
    create: function (wallet) {
      // var model = this.store.createRecord("wallet", {
      //   name: wallet.get("name"),
      //   balance: wallet.get("balance")
      // });
      var self = this;
      console.log(wallet.validate);
        wallet.validate().then(function () {
        if(wallet.get('isValid')) {
          wallet.save().then(self.transitionTo('wallets'));
        };
      }).catch(function (wallet) {
        if(wallet.get('isValid')) {
          console.log(wallet.balance[0]);
        };
      });
      // return this.transitionTo('wallets');
    },
    back: function () {
      return this.transitionTo('wallets');
    }
  }
});
