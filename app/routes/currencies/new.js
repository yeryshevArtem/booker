import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord("currency");
  },
  actions: {
    willTransition: function () {
      if (this.get("controller.model.isNew")) {
        return this.get("controller.model").destroyRecord();
      }
    },
    create: function () {
      var self = this;
      var currency = this.get("controller.model");
      currency.validate().then(function () {
        if(currency.get('isValid')) {
          currency.save().then(function () {
            self.transitionTo('currencies');
          });
        }
      }).catch(function () {
        console.log("Something wrong with model!");
      });
    },
    back: function () {
      return this.transitionTo('currencies');
    }
  }
});
