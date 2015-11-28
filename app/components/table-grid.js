import Ember from 'ember';

export default Ember.Component.extend({
  model: null, //pass
  headerCellsNames: function () {
    //TODO: get header cells names from model and return array of strings
  }.property(),
});
