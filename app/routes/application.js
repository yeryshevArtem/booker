import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.Object.create({
      isAuthenticated: true
    });
  }
});
