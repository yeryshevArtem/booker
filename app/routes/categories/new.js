import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord("category");
  },
  actions: {
    create: function (category) {
      // console.log(category);
      // console.log(category.get("name"));
      this.store.createRecord("category", {
        name: category.get("name"),
        icon: category.get("icon")
      }).save().then(function (savedModelInstance) {
        // console.log(savedModelInstance)
        // console.log(req)
      });
    },
    back: function () {
      return this.transitionTo('categories');
    }
  }
});
