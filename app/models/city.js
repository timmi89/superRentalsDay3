import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  country: DS.attr(),
  rentals: DS.hasMany('rental', { async: true })
}),

actions: {
  delete(city) {
    if (confirm('Are you sure you want to delete this city?')) {
      this.sendAction('destroyCity', city);
    }
  }
});
