import Ember from 'ember';

export default Ember.Component.extend({
  content: null, //pass array of objects
  columnsNames: function () {
    //TODO: return Ember.Object.keys(this.get("content.firstObject"))
  }.property("content"), //TODO: fix
});
