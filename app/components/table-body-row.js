import Ember from 'ember';

export default Ember.Component.extend({
  content: null, //pass object instance
  values: function () {
    //return Ember.Object.values(this.get('content'))
  }.property('content') //TODO: fix
});
