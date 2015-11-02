import DS from 'ember-data';
// import EmberValidations from "ember-validations";

export default DS.Model.extend({
  name: DS.attr(),
  balance: DS.attr(),
  // validations: {
  //   name: {
  //     presence: true
  //   },
  //   balance: {
  //     presence: true,
  //     numericality: true
  //   }
  // }
});
