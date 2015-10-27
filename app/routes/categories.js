import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll("category");
  },
  actions: {
    delete: function (categoryId) {
      return alert("Delete category with id: " + categoryId);
    }
  }
});
