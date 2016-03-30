import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    rentalFormShow() {
      this.set('addnewCity', true);
    },

    saveA() {
      var params = {
        name: this.get('name'),
        country: this.get("country"),
      };
      this.set('addnewCity', false);
      this.sendAction('saveB', params)
    }
  }
})
