import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find("outcome", params.id);
  },
  actions: {
    edit: function (outcome) {
      var id = outcome.id;
      this.store.findRecord("outcome", id).then(function(current) {
        var name = outcome.get("name");
        var summ = outcome.get("summ");
        var wallet = outcome.get("wallet");
        var category = outcome.get("category");
        current.set("name", name);
        current.set("summ", summ);
        current.set("wallet", wallet);
        current.set("category", category);
        current.save();
      });
      return this.transitionTo('outcomes');
      // console.log("Saving action in route.");
      // return alert("Editing category with id: " + category.get("id"));
    },
    back: function () {
      return this.transitionTo('outcomes');
    }
  }
});
