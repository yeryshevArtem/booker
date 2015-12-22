import Ember from 'ember';

export default Ember.Component.extend({
  content: null, //pass array of objects
  columnsNames: function () {
    console.log(this.get("content.firstObject").toJSON());
    return Ember.keys(this.get("content.firstObject").toJSON())
  }.property("content"),
  actions: {
    deleteEntity: function (contentDeleted) {
      // let content = this.get('content');
      this.sendAction("deleteEntity", contentDeleted);//pass content
    }
  }
});
