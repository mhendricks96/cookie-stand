'use strict';
console.log('yeah, mike');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];



let seattle = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgPerCustomer: 6.3,
  cookiesSoldPerHourArray: [],
  dailyTotal: 0,

  randomCustomersEachHour: function () {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  },
  calcCookiesSoldHourly: function (){
    let reandomCookiesSoldHourly = this.randomCustomersEachHour();
    for (let i = 0; i < hours.length; i++){
      //let totalSalesPerHour = Math.floor(this.randomCustomersEachHour)() * this.avgPerCustomer();
      this.cookiesSoldPerHourArray.push(reandomCookiesSoldHourly * this.avgPerCustomer);
    }
  },
  //  multiply customer number times avg
  //  handle the number. round uppp
  //  push into the cookiesSoldPerHourArray

  render: function () {
    this.calcCookiesSoldHourly();
  },
};

seattle.render();

function totalCookies() {
  for (let i = 0; i < hours.length; i++) {
    let cookieCount = (`${hours.push} : ${seattle.cookiesSoldPerHourArray.push}`);
    return;
  }
}
totalCookies();