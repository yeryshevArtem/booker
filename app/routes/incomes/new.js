import Ember from 'ember';
import RouteNewMixin from '../../mixins/route-new-mixin';
import RouteFormMixin from '../../mixins/route-form-mixin';

export default Ember.Route.extend(RouteNewMixin, RouteFormMixin, {
  model() {
    return this.store.createRecord("income");
  },
  actions: {
    back: function () {
      return this.transitionTo('incomes');
    }
  }
});
