// This guy is the parent of all of our model files
import Ember from 'ember';

//model (now in rentals.json and imported into database)

//this is the same as writing model:function()
//method = hook
//accesses data model in firebase

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      cities: this.store.findAll('city'),
      rentals: this.store.findAll('rental')
    });
  },

//info is passed up from index.hbs, here is where we actaully destroy the rental
// We use the params to create a new rental record in the store and then save it. We transition back to our index page and see our new rental in the list.
actions: {
    saveCity(params) {
      var newCityName = this.store.createRecord('city', params);
      newCityName.save();
      this.transitionTo('index');
    }
  }
});
