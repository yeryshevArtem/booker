import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll("wallet");
  },
  actions: {
    openDialog: function (wallet) {
      this.get("controller").set('isModalDialogActive', true);
      this.get("controller").set('wallet', wallet);
    },
    closeDialog: function () {
      this.get("controller").set('isModalDialogActive', false);
    },
    delete: function () {
      this.get('controller.wallet').destroyRecord();
      this.get("controller").set('isModalDialogActive', false);
    }
  }
});
