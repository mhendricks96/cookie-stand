'use strict';
console.log('yeah, mike');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

let seattleStore = {
  name: 'seattleStore',
  location: 'Seattle',
  minHourly: 23,
  maxHourly: 65,
  avgPerCustomer: 6.3,
  customersPerHour: function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  cookiesPerHour: function findCookiesPerHour(){
    return (this.avgPerCustomer * this.customersPerHour);
  }
};


console.log(seattleStore);
console.log(seattleStore.cookiesPerHour);
