import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find("currency", params.id);
  },
  actions: {
    edit: function (currency) {
      var id = currency.id;
      this.store.findRecord("currency", id).then(function(current) {
        var name = currency.get("name");
        var icon = currency.get("icon");
        current.set("name", name);
        current.set("icon", icon);
        current.save();
      });
      return this.transitionTo('currencies');
      // console.log("Saving action in route.");
      // return alert("Editing category with id: " + category.get("id"));
    },
    back: function () {
      return this.transitionTo('currencies');
    }
  }
});
