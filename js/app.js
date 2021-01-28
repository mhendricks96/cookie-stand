'use strict';
console.log('yeah, mike');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

let myContainer = document.getElementById('container');
//let section = document.createElement('section');
let seattleList = document.getElementById('seattle');

let section = document.createElement('section');
myContainer.appendChild(section);


let article = document.createElement('article');
section.appendChild(article);


let seattleStore = {
  name: 'seattle',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgPerCustomer: 6.3,
  cookiesSoldPerHourArray: [],
  dailyTotal: 0,

  randomCustomersEachHour: function () {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  },

  calcCookiesSoldHourly: function (){
    this.randomCustomersEachHour();
    for (let i = 0; i < hours.length; i++){
      //let totalSalesPerHour = Math.floor(this.randomCustomersEachHour)() * this.avgPerCustomer();
      this.cookiesSoldPerHourArray.push(Math.ceil(this.randomCustomersEachHour() * this.avgPerCustomer));
      this.dailyTotal = this.dailyTotal + this.cookiesSoldPerHourArray[i];
    }
  },

  //  multiply customer number times avg
  //  handle the number. round uppp
  //  push into the cookiesSoldPerHourArray

  render: function () {
    this.calcCookiesSoldHourly();
    for (let i = 0; i < this.cookiesSoldPerHourArray.length; i++){
      //let li = document.createElement('li');
      section.textContent = `${hours[i]}: ${(this.cookiesSoldPerHourArray[i])} cookies`;
      seattleList.appendChild(section);
    }
    let totalSalesFinal = document.createElement('li');
    totalSalesFinal.textContent = `Total: ${this.dailyTotal} cookies.`;
    seattleList.appendChild(totalSalesFinal);
  },
};


seattleStore.render();
