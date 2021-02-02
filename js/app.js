'use strict';

//global variables
//hours array
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

let allStores = [];
//let storeTable = document.getElementById('StoreSales');
let myContainer = document.getElementById('container');
//let cookieTable = document.getElementById('cookie-table');
let tbody = document.getElementById('body-rows');
//let tableHeader = document.getElementById('table-header');
//let tablefooter = document.getElementById('table-footer');

console.log(myContainer);

//get elements by id for 5 lists
//let seattleList = document.getElementById('seattle');
//let tokyoList = document.getElementById('tokyo');
//let dubaiList = document.getElementById('dubai');
//let parisList = document.getElementById('paris');
//let limaList = document.getElementById('lima');

// write 5 object literals


// turning seattleStore into a constructor
function Store (name, minHourlyCustomers, maxHourlyCustomers, avgPerCustomer) {
  this.name = name;
  this.min = minHourlyCustomers;
  this.max = maxHourlyCustomers;
  this.avg = avgPerCustomer;
  this.cookiesPerHour = [];
  this.dailyTotal = 0;
  allStores.push(this);//pushing all instances of object into array
  //this.render(); can use to render stores instead of all the individual store renders at the bottom
}

//this came from Math.random
Store.prototype.randomCustomersEachHour = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

Store.prototype.calcCookiesSoldHourly = function (){
  for (let i = 0; i < hours.length; i++){
    let randomCust = this.randomCustomersEachHour();//tethers this function to randomCustomersEachHourFunction
    let hourlyTotal = Math.ceil(randomCust * this.avg);
    this.cookiesPerHour.push(hourlyTotal);//pushing allinstances into an array.
    this.dailyTotal = this.dailyTotal + this.cookiesPerHour[i];
  }
};

Store.prototype.render = function () {
  this.calcCookiesSoldHourly();//continues the line of tethering
  let tr = document.createElement('tr');


  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);


  for (let i = 0; i < this.cookiesPerHour.length; i++){
    //create element
    let td = document.createElement('td');
    //give it content
    td.textContent = this.cookiesPerHour[i];
    //append it to the DOM
    tr.appendChild(td);
  }

  let td = document.createElement('td');
  td.textContent = this.dailyTotal;
  tr.appendChild(td);
  tbody.appendChild(tr);
};

function renderHeader(){
  let header = document.getElementById('first-row');
  for (let i = 0; i < hours.length; i++){
    let th = document.createElement('th');
    th.textContent = hours[i];
    header.appendChild(th);
  }

  let th = document.createElement('th');
  th.textContent = 'Store Daily Total';
  header.appendChild(th);


}


let seattleStore = new Store('seattle', 23, 65, 6.3, []);
let tokyoStore = new Store('tokyo', 3, 24, 1.2, []);
let dubaiStore = new Store('dubai', 11, 38, 3.7, []);
let parisStore = new Store('paris', 20, 38, 2.3, []);
let limaStore = new Store('lima', 2, 16, 4.6, []);

renderHeader();
seattleStore.render();
tokyoStore.render();
dubaiStore.render();
parisStore.render();
limaStore.render();

