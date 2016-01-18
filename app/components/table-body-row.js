import Ember from 'ember';

export default Ember.Component.extend({
  content: null, //pass object instance
  contentObserver: Ember.on('init', Ember.observer('content.name', function() {
    //TODO:
    //1. Get content.
    //2. Make it have only attributes/values we need (described in model).
  })),
  actions: {
    deleteEntity: function () {
      this.sendAction("deleteEntity", this.get('content')); //pass content
    }
  }
});
