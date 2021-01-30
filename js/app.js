'use strict';
console.log('yeah, mike');
//global variables
//hours array
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

//let cookieTable = document.getElementById('cookie-table');

//get elements by id for 5 lists
//let seattleList = document.getElementById('seattle');
//let tokyoList = document.getElementById('tokyo');
//let dubaiList = document.getElementById('dubai');
//let parisList = document.getElementById('paris');
//let limaList = document.getElementById('lima');

// write 5 object literals


// turning seattleStore into a constructor
function Store (name, minHourlyCustomers, maxHourlyCustomers, avgPerCustomer, cookiesSoldPerHourArray, dailyTotal) {
  this.name = name,
  this.min = minHourlyCustomers,
  this.max = maxHourlyCustomers,
  this.avg = avgPerCustomer,
  this.perHourArray = cookiesSoldPerHourArray,
  this.dailyStoreTotal = dailyTotal;
}


Store.prototype.randomCustomersEachHour = function () {
  return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
};

Store.prototype.calcCookiesSoldHourly = function (){
  for (let i = 0; i < hours.length; i++){
    let randomCust = this.randomCustomersEachHour();//tethers this function to randomCustomersEachHourFunction
    let hourlyTotal = Math.ceil(randomCust * this.avgPerCustomer);
    this.cookiesSoldPerHourArray.push(hourlyTotal);
    this.dailyTotal = this.dailyTotal + this.cookiesSoldPerHourArray[i];
  }
};

Store.prototype.render = function () {
  this.calcCookiesSoldHourly();//continues the line of tethering

  let th = document.createElement('th');
  th.textContent = this.name;
  
  let tr = document.createElement('tr');
  tr.appendChild(th);


  for (let i = 0; i < this.cookiesSoldPerHourArray.length; i++){
    this.dailyStoreTotal += this.dailyStoreTotal[i];
    //create element
    let td = document.createElement('tr');
    //give it content
    td.textContent = `${hours[i]}: ${(this.cookiesSoldPerHourArray[i])} cookies`;
    //append it to the DOM
    tr.cookieTable.appendChild(td);
  }
};


let seattleStore = new Store('seattle', 23, 65, 6.3, [], 0);



seattleStore.render();









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

//Executable code
seattleStore.render();
tokyoStore.render();
dubaiStore.render();
parisStore.render();
limaStore.render();*/
