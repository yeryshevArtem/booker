import Ember from 'ember';

export default Ember.Component.extend({
  content: null, //pass object instance
  values: function () {
    return [];
  },
  actions: {
    deleteEntity: function () {
      let contentDeleted = this.get('content');
      this.sendAction("deleteEntity", contentDeleted);//pass content
    }
  }
});
