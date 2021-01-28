'use strict';
console.log('yeah, mike');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];


let seattleStore = {
  name: 'seattleStore',
  location: 'Seattle',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgPerCustomer: 6.3,
  cookiesSoldPerHourArray: [16, 20, 35, 48]
  dailyStoreTotal: 0, 
  randomCustomersEachHour: function getRandomIntInclusive(min, max) {
    //return some math here
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  },
  calcCookiesEachHour: function (){
    let reandomCustomersThisHour = this.randomCustomersEachHour();
    //for loop
    //  multiply customer number times avf
    //  handle the number. round up
    //  push into the cookiesSoldPerHourArray
  },
  render: function (){
    this.calcCookiesEachHour();
    //do something
  }
};


seattleStore.render();
parseInt.render();