import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find("income", params.id);
  },
  actions: {
    edit: function (income) {
      var id = income.id;
      this.store.findRecord("income", id).then(function(current) {
        var name = income.get("name");
        var summ = income.get("summ");
        var wallet = income.get("wallet");
        var category = income.get("category");
        current.set("name", name);
        current.set("summ", summ);
        current.set("wallet", wallet);
        current.set("category", category);
        current.save();
      });
      return this.transitionTo('incomes');
      // console.log("Saving action in route.");
      // return alert("Editing category with id: " + category.get("id"));
    },
    back: function () {
      return this.transitionTo('incomes');
    }
  }
});
