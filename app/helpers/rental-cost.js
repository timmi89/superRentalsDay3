import Ember from 'ember';

export function rentalCost(params) {
  var rentalPrice = params[0].get('cost');

  if (rentalPrice >= 250){
    return '$$$$'
  } else if (rentalPrice >= 150){
    return '$$$'
  }  else if (rentalPrice >= 90){
    return '$$'
  } else if (rentalPrice <= 50){
    return '$'
  }
}

export default Ember.Helper.helper(rentalCost);
