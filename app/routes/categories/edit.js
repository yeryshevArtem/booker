import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find("category", params.id);
  },
  actions: {
    edit: function (category) {
      var id = category.id;
      this.store.findRecord("category", id).then(function(current) {
        var name = category.get("name");
        var icon = category.get("icon");
        current.set("name", name);
        current.set("icon", icon);
        current.save();
      });
      // console.log("Saving action in route.");
      // return alert("Editing category with id: " + category.get("id"));
    },
    back: function () {
      return this.transitionTo('categories');
    }
  }
});
