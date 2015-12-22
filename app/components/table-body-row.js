import Ember from 'ember';

export default Ember.Component.extend({
  content: null, //pass object instance
  values: function () {
    var objectInstance = this.get('content').toJSON(),
    arr = [];
    for (var prop in objectInstance) {  //I want to convert object to array
      arr.push(objectInstance[prop]);
    };
    return arr
  }.property('content'),
  actions: {
    deleteEntity: function () {
      let contentDeleted = this.get('content');
      this.sendAction("deleteEntity", contentDeleted);//pass content
    }
  }
});
