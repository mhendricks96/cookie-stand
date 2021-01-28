'use strict';
console.log('yeah, mike');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];


let seattleList = document.getElementById('seattle');
let tokyoList = document.getElementById('tokyo');
let dubaiList = document.getElementById('dubai');
let parisList = document.getElementById('paris');
let limaList = document.getElementById('lima');
//let section = document.createElement('section');
//myContainer.appendChild(section);


//let article = document.createElement('article');
//section.appendChild(article);


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

      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${(this.cookiesSoldPerHourArray[i])} cookies`;
      seattleList.appendChild(li);
    }
    let totalSalesFinal = document.createElement('li');
    totalSalesFinal.textContent = `Total: ${this.dailyTotal} cookies.`;
    seattleList.appendChild(totalSalesFinal);
  },
};




let tokyoStore = {
  name: 'tokyo',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgPerCustomer: 1.2,
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

      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${(this.cookiesSoldPerHourArray[i])} cookies`;
      tokyoList.appendChild(li);
    }
    let totalSalesFinal = document.createElement('li');
    totalSalesFinal.textContent = `Total: ${this.dailyTotal} cookies.`;
    tokyoList.appendChild(totalSalesFinal);
  },
};




let dubaiStore = {
  name: 'dubai',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgPerCustomer: 3.7,
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

      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${(this.cookiesSoldPerHourArray[i])} cookies`;
      dubaiList.appendChild(li);
    }
    let totalSalesFinal = document.createElement('li');
    totalSalesFinal.textContent = `Total: ${this.dailyTotal} cookies.`;
    dubaiList.appendChild(totalSalesFinal);
  },
};



let parisStore = {
  name: 'paris',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgPerCustomer: 2.3,
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

      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${(this.cookiesSoldPerHourArray[i])} cookies`;
      parisList.appendChild(li);
    }
    let totalSalesFinal = document.createElement('li');
    totalSalesFinal.textContent = `Total: ${this.dailyTotal} cookies.`;
    parisList.appendChild(totalSalesFinal);
  },
};



let limaStore = {
  name: 'lima',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgPerCustomer: 4.6,
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

      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${(this.cookiesSoldPerHourArray[i])} cookies`;
      limaList.appendChild(li);
    }
    let totalSalesFinal = document.createElement('li');
    totalSalesFinal.textContent = `Total: ${this.dailyTotal} cookies.`;
    limaList.appendChild(totalSalesFinal);
  },
};


seattleStore.render();
tokyoStore.render();
dubaiStore.render();
parisStore.render();
limaStore.render();
