import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find("income", params.id);
  },
  actions: {
    edit: function () {
      var income = this.get("controller.model");
      var self = this;
      income.validate().then(function () {
        if(income.get('isValid')) {
          income.save().then(function () {
            self.transitionTo('incomes');
          });
        }
      }).catch(function () {
        console.log("Something wrong with model!");
      });
    },
    back: function () {
      return this.transitionTo('incomes');
    }
  }
});
