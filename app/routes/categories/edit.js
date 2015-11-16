import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find("category", params.id);
  },
  actions: {
    edit: function () {
      var category = this.get("controller.model");
      var self = this;
      category.validate().then(function () {
        if(category.get('isValid')) {
          category.save().then(function () {
            self.transitionTo("categories");
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
