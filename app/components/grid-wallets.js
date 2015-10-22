import Ember from 'ember';

export default Ember.Component.extend({
  wallets: null, //pass
  actions: {
    delete: function (walletId) {
      return this.get("controller").sendAction("delete", walletId);
    }
  }
});
