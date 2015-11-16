import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord("outcome");
  },
  actions: {
    willTransition: function () {
      if (this.get("controller.model.isNew")) {
        return this.get("controller.model").destroyRecord();
      }
    },
    create: function () {
      var self = this;
      var outcome = this.get("controller.model");
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
