import Ember from 'ember';

export default Ember.Component.extend({
  content: null, //pass array of objects
  actions: {
    deleteEntity: function (contentDeleted) {
      // let content = this.get('content');
      // console.log(contentDeleted);
      this.sendAction("deleteEntity", contentDeleted);//pass content
    },
    loadMore: function () {
      console.log('to be done');
      //TODO: send action to table-grid
    }
  }
});
