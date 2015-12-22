import Ember from 'ember';

export default Ember.Component.extend({
  content: null, //pass array of objects
  actions: {
    deleteEntity: function (contentDeleted) {
      // let content = this.get('content');
      this.sendAction("deleteEntity", contentDeleted);//pass content
    },
    loadMore: function () {
      //TODO: send action to table-grid
    }
  }
});
