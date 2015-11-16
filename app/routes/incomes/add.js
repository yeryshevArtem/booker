import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord("income");
  },
  actions: {
    willTransition: function () {
      if (this.get("controller.model.isNew")) {
        return this.get("controller.model").destroyRecord();
      }
    },
    create: function () {
      var self = this;
      var income = this.get("controller.model");
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
