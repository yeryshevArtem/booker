import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    create: function (outcome) {
      this.store.createRecord("outcome", {
        name: outcome.get("name"),
        summ: outcome.get("summ"),
        wallet: outcome.get("wallet"),
        category: outcome.get("category")
      }).save().then(function (savedModelInstance) {
        console.log(wallet);
        console.log(category);
      });
      return this.transitionTo('outcomes');
    },
    back: function () {
      return this.transitionTo('outcomes');
    }
  }
});
