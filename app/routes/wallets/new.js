import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord("wallet");
  },
  actions: {
    willTransition: function () {
      if (this.get("controller.model.isNew")) {
        return this.get("controller.model").destroyRecord();
      }
    },
    create: function () {
      var self = this;
      var wallet = this.get("controller.model");
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
