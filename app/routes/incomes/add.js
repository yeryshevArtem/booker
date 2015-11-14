import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    create: function (income) {
      this.store.createRecord("income", {
        name: income.get("name"),
        summ: income.get("summ"),
        wallet: income.get("wallet"),
        category: income.get("category")
      }).save().then(function (savedModelInstance) {
        console.log(wallet);
        console.log(category);
      });
      return this.transitionTo('incomes');
    },
    back: function () {
      return this.transitionTo('incomes');
    }
  }
});
