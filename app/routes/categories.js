import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll("category");
  },
  actions: {
    delete: function (contentDeleted) {//pass model
      if (confirm('Are you sure?')) {
        contentDeleted.destroyRecord();
        console.log('dadasdasdasdadasdasd!');
      }
    }
  }
});
