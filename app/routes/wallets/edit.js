import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find("wallet", params.id);
  },
  actions: {
    edit: function () {
      var wallet = this.get("controller.model");
      var self = this;
      wallet.validate().then(function () {
        if(wallet.get('isValid')) {
          wallet.save().then(function () {
            self.transitionTo('wallets');
          });
        }
      }).catch(function () {
        console.log("Something wrong with model!");
      });
    },
    back: function () {
      return this.transitionTo('wallets');
    }
  }
});
