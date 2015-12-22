import Ember from 'ember';

export default Ember.Component.extend({
  model: null, //pass
  title: null, //pass
  actions: {
    close: function () {
      return this.sendAction('close');
    },
    save: function () {
      let model = this.get('model');
      // console.log(model);
      console.log("Saving action in component.");
      this.sendAction('save', model);
    }
  }
});
