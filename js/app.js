'use strict';
console.log('yeah, mike');
//global variables
//hours array
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

//let allStores = [];
//let storeTable = document.getElementById('StoreSales');
let myContainer = document.getElementById('container');
let cookieTable = document.getElementById('cookie-table');

console.log(myContainer);

//get elements by id for 5 lists
//let seattleList = document.getElementById('seattle');
//let tokyoList = document.getElementById('tokyo');
//let dubaiList = document.getElementById('dubai');
//let parisList = document.getElementById('paris');
//let limaList = document.getElementById('lima');

// write 5 object literals


// turning seattleStore into a constructor
function Store (name, minHourlyCustomers, maxHourlyCustomers, avgPerCustomer, cookiesSoldPerHourArray) {
  this.name = name,
  this.min = minHourlyCustomers,
  this.max = maxHourlyCustomers,
  this.avg = avgPerCustomer;
  this.cookiesPerHour = cookiesSoldPerHourArray;
}

Store.prototype.randomCustomersEachHour = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

Store.prototype.calcCookiesSoldHourly = function (){
  for (let i = 0; i < hours.length; i++){
    let randomCust = this.randomCustomersEachHour();//tethers this function to randomCustomersEachHourFunction
    let hourlyTotal = Math.ceil(randomCust * this.avg);
    this.cookiesPerHour.push(hourlyTotal);
    this.dailyTotal = this.dailyTotal + this.cookiesPerHour[i];
  }
};

Store.prototype.render = function () {
  this.calcCookiesSoldHourly();//continues the line of tethering

  let tr = document.createElement('tr');
  cookieTable.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);


  for (let i = 0; i < this.cookiesPerHour.length; i++){
    this.dailyTotal += this.dailyTotal[i];
    //create element
    let td = document.createElement('td');
    //give it content
    td.textContent = `${(this.cookiesPerHour[i])}`;
    //append it to the DOM
    tr.appendChild(td);
  }

  let td = document.createElement('td');
  td.textContent = this.dailyTotal;
  tr.appendChild(td);
};


let seattleStore = new Store('seattle', 23, 65, 6.3, []);
let tokyoStore = new Store('tokyo', 3, 24, 1.2, []);
let dubaiStore = new Store('dubai', 11, 38, 3.7, []);
let parisStore = new Store('paris', 20, 38, 2.3, []);
let limaStore = new Store('lima', 2, 16, 4.6, []);


seattleStore.render();
tokyoStore.render();
dubaiStore.render();
parisStore.render();
limaStore.render();








/*let seattleStore = {
  name: 'seattle',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgPerCustomer: 6.3,
  cookiesSoldPerHourArray: [],
  dailyTotal: 0,
  get random number of customers for an hour
  randomCustomersEachHour: function () {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  },
  //calculate the number of cookies for each hour
  calcCookiesSoldHourly: function (){
    for (let i = 0; i < hours.length; i++){
      let randomCust = this.randomCustomersEachHour();//tethers this function to randomCustomersEachHourFunction
      let hourlyTotal = Math.ceil(randomCust * this.avgPerCustomer);
      this.cookiesSoldPerHourArray.push(hourlyTotal);
      this.dailyTotal = this.dailyTotal + this.cookiesSoldPerHourArray[i];
    }
  },
 
  //render results. at this point we have 14 hours of cookie data.
  render: function () {
    this.calcCookiesSoldHourly();//continues the line of tethering
    for (let i = 0; i < this.cookiesSoldPerHourArray.length; i++){
      //create element
      let li = document.createElement('li');
      //give it content
      li.textContent = `${hours[i]}: ${(this.cookiesSoldPerHourArray[i])} cookies`;
      //append it to the DOM
      seattleList.appendChild(li);
    }
    //Total
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
    for (let i = 0; i < hours.length; i++){
      let randomCust = this.randomCustomersEachHour();//tethers this function to randomCustomersEachHourFunction
      let hourlyTotal = Math.ceil(randomCust * this.avgPerCustomer);
      this.cookiesSoldPerHourArray.push(hourlyTotal);
      this.dailyTotal = this.dailyTotal + this.cookiesSoldPerHourArray[i];
    }
  },

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
    for (let i = 0; i < hours.length; i++){
      let randomCust = this.randomCustomersEachHour();//tethers this function to randomCustomersEachHourFunction
      let hourlyTotal = Math.ceil(randomCust * this.avgPerCustomer);
      this.cookiesSoldPerHourArray.push(hourlyTotal);
      this.dailyTotal = this.dailyTotal + this.cookiesSoldPerHourArray[i];
    }
  },

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
    for (let i = 0; i < hours.length; i++){
      let randomCust = this.randomCustomersEachHour();//tethers this function to randomCustomersEachHourFunction
      let hourlyTotal = Math.ceil(randomCust * this.avgPerCustomer);
      this.cookiesSoldPerHourArray.push(hourlyTotal);
      this.dailyTotal = this.dailyTotal + this.cookiesSoldPerHourArray[i];
    }
  },

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
    for (let i = 0; i < hours.length; i++){
      let randomCust = this.randomCustomersEachHour();//tethers this function to randomCustomersEachHourFunction
      let hourlyTotal = Math.ceil(randomCust * this.avgPerCustomer);
      this.cookiesSoldPerHourArray.push(hourlyTotal);
      this.dailyTotal = this.dailyTotal + this.cookiesSoldPerHourArray[i];
    }
  },


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

//ExecutableCode
seattleStore.render();
tokyoStore.render();
dubaiStore.render();
parisStore.render();
limaStore.render();*/
