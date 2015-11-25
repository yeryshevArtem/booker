import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    save: function () {
      var self = this;
      var model = this.get("controller.model");
      model.validate().then(function () {
        if(model.get('isValid')) {
          model.save().then(function () {
            //TODO: self.transitionTo('wallets');
          });
        }
      }).catch(function () {
        console.log("Something wrong with model!");
      });
    }
  }
});
