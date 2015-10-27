import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord("category");
  },
  actions: {
    create: function (category) {
      function getRandomArbitrary(min, max) {
        var random =  Math.random() * (max - min) + min;
        var roundRandom = Math.round(random);
        return roundRandom;
      };
      // console.log(category);
      // console.log(category.get("name"));
      this.store.createRecord("category", {
        id:  getRandomArbitrary(1, 100),
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
