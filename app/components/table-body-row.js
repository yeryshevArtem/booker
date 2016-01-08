import Ember from 'ember';

export default Ember.Component.extend({
  content: null, //pass object instance
  values: function () {
    // return [];
  },
  actions: {
    deleteEntity: function () {
      this.sendAction("deleteEntity", this.get('content')); //pass content
    }
  }
});
