import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  summ: DS.attr(),
  wallet: DS.belongsTo('wallet', { async: true }),
  category: DS.belongsTo('category', { async: true })
});
