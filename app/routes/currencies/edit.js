import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find("currency", params.id);
  },
  actions: {
    edit: function () {
      var currency = this.get("controller.model");
      var self = this;
      currency.validate().then(function () {
        if(currency.get('isValid')) {
          currency.save().then(function () {
            self.transitionTo("currencies");
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
