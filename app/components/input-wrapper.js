import Ember from 'ember';

export default Ember.Component.extend({
  for: null, //pass
  model: null, //pass
  errorMessage: function () {
    var propertyName = this.get("for");
    return this.get("model.errors." + propertyName);
  }.property("model.isValid"),
});
