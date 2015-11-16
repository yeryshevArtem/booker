import Ember from 'ember';

export default Ember.Component.extend({
  model: null, //pass
  title: null, //pass
  actions: {
    close: function () {
      return this.sendAction('close');
    },
    save: function () {
      console.log("Saving action in component.");
      return this.sendAction('save');
    }
  }
});
