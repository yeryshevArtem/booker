import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    create: function (currency) {
      this.store.createRecord("currency", {
        name: currency.get("name"),
        icon: currency.get("icon")
      }).save().then(function (savedModelInstance) {
        console.log('dasda');
      });
      return this.transitionTo('currencies');
    },
    back: function () {
      return this.transitionTo('currencies');
    }
  }
});
