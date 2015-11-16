import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord("category");
  },
  actions: {
    willTransition: function () {
      if (this.get("controller.model.isNew")) {
        return this.get("controller.model").destroyRecord();
      }
    },
    create: function () {
      var self = this;
      var category = this.get("controller.model");
      category.validate().then(function () {
        if(category.get('isValid')) {
          category.save().then(function () {
            self.transitionTo('categories');
          });
        }
      }).catch(function () {
        console.log("Something wrong with model!");
      });
    },
    back: function () {
      return this.transitionTo('categories');
    }
  }
});
