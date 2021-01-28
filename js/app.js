'use strict';
console.log('yeah, mike');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

function randomCustomerPerHour(){

};

let seattle = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgPerCustomer: 6.3,
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,
  randomCustomersEachHour: function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  },
  calcCookiesSoldEachHour: function (){
    let reandomCustomersforOneHour = this.randomCustomersEachHour();
    for (var i = 0; i < hours.length; i++)
    //  multiply customer number times avg
    //  handle the number. round up
    //  push into the cookiesSoldPerHourArray
  
    render: function (){
    this.calcCookiesSoldEachHour();
    //do something
  }
},


seattle.render();
