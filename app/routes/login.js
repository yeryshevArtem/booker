import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Route.extend({
  actions: {
    login: function (email, password) {
      return alert("To be done.");
    },
    loginViaSocialNetwork: function () {
      return alert("To be done.");
    }
  }
});
