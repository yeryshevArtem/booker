import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    create: function (category) {
      this.store.createRecord("category", {
        name: category.get("name"),
        icon: category.get("icon")
      }).save().then(function (savedModelInstance) {
        console.log('dasda');
      });
      return this.transitionTo('categories');
    },
    back: function () {
      return this.transitionTo('categories');
    }
  }
});
