import Ember from 'ember';

export default Ember.Component.extend({
  content: null, //pass array of objects
  actions: {
    loadMore: function () {
      //TODO: send action to table-grid
    }
  }

});
