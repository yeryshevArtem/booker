import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find("outcome", params.id);
  },
  actions: {
    edit: function () {
      var outcome = this.get("controller.model");
      var self = this;
      outcome.validate().then(function () {
        if(outcome.get('isValid')) {
          outcome.save().then(function () {
            self.transitionTo('outcomes');
          });
        }
      }).catch(function () {
        console.log("Something wrong with model!");
      });
    },
    back: function () {
      return this.transitionTo('outcomes');
    }
  }
});
