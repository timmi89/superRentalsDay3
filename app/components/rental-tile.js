// Because update-rental is nested within another component, rental-tile, this.sendAction(‘update, rental, params); only sends the update() action up one level. It is sent from the update-rental component to its parent component, rental-tile. As such, the rental-tile component will also have to pass the action upward in order for this action to eventually reach the appropriate route. rental-tile will need its own update action to do this:

import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    update(rental, params){
      this.sendAction('update', rental, params);
    },
    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
