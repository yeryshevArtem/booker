import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll("category");
  },
  actions: {
    openDialog: function (contentDeleted) {
      this.get("controller").set('isModalDialogActive', true);
      this.get("controller").set('contentDeleted', contentDeleted);
    },
    closeDialog: function () {
      this.get("controller").set('isModalDialogActive', false);
    },
    delete: function () {
      this.get('controller.contentDeleted').destroyRecord();
      this.get("controller").set('isModalDialogActive', false);
    }
  }
});
