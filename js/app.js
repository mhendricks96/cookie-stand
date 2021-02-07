'use strict';

//global variables
//hours array
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

let allStores = [];
//let storeTable = document.getElementById('StoreSales');
//let myContainer = document.getElementById('container');
//let cookieTable = document.getElementById('cookie-table');
//let tbody = document.getElementById('body-rows');
//let tableHeader = document.getElementById('table-header');


//console.log(myContainer);


// write 5 object literals


// turning seattleStore into a constructor
function Store (name, minHourlyCustomers, maxHourlyCustomers, avgPerCustomer) {
  this.name = name;
  this.min = minHourlyCustomers;
  this.max = maxHourlyCustomers;
  this.avg = avgPerCustomer;
  this.customersEachHour = [];
  this.cookiesPerHour = [];
  this.dailyTotal = 0;
  allStores.push(this);//pushing all instances of object into array
  //this.render(); can use to render stores instead of all the individual store renders at the bottom
  //this.render();
}

//this came from Math.random
Store.prototype.calcHourlyCustomers = function () {
  for (let i =0; i < hours.length; i++){
    this.customersEachHour.push(Math.floor(Math.random() * (this.max - this.min)) + this.min);
  }
};

Store.prototype.calcCookiesPerHour = function (){
  for (let i = 0; i < hours.length; i++){
    this.cookiesPerHour.push(this.customersEachHour[i] * Math.ceil(this.avg));
  }
};

Store.prototype.calcTotalCookies = function(){
  for (let i = 0; i < hours.length; i++){
    this.dailyTotal += this.cookiesPerHour[i];
  }
};



Store.prototype.render = function () {
  this.calcHourlyCustomers();
  this.calcCookiesPerHour();
  this.calcTotalCookies();

  let firstRow = document.createElement('tr');
  //create first row with store names
  let storeNames = document.createElement('td');
  storeNames.textContent = this.name;
  firstRow.appendChild(storeNames);

  //create loop for all store names
  for (let i = 0; i < hours.length; i++){
    //create element
    let td = document.createElement('td');
    //give it content
    td.textContent = this.cookiesPerHour[i];
    //append it to the DOM
    firstRow.appendChild(td);
  }
  //total column

  let totalColumn = document.createElement('td');
  totalColumn.textContent = this.dailyTotal;

  firstRow.appendChild(totalColumn);
  document.getElementById('table').appendChild(firstRow);
  allStores.push(this);
};

let footerRow = document.createElement('tr');

let footererName = document.createElement('th');
footererName.textContent = 'Total';
footerRow.appendChild(footererName);

let columnTotal = 0;

function total(){
  for (let i = 0; i < hours.length; i++){
    for (let j = 0; j < allStores.length; j++){
      columnTotal = columnTotal + allStores[j].cookiesPerHour[i];
    }

    let footerCell = document.createElement('th');

    footerCell.textContent = columnTotal;
    //footerCell.className = 'cellIndex';
    footerRow.appendChild(footerCell);
    columnTotal = 0;

  }
}










//function renderAll(){
//for (let i = 0; i < allStores.length; i++){
//allStores[i].render();
//}
//}





let seattleStore = new Store('seattle', 23, 65, 6.3, []);
let tokyoStore = new Store('tokyo', 3, 24, 1.2, []);
let dubaiStore = new Store('dubai', 11, 38, 3.7, []);
let parisStore = new Store('paris', 20, 38, 2.3, []);
let limaStore = new Store('lima', 2, 16, 4.6, []);


//renderAll();
//renderFooter();
seattleStore.render();
tokyoStore.render();
dubaiStore.render();
parisStore.render();
limaStore.render();


document.getElementById('tfoot').appendChild(footerRow);
total();

//Event Handler
//step 1: get element from the DOM
let myForm = document.getElementById('container-two');


//form event handler
// step 3:declare the callback function with ONE parameter
//parameter = event
function handleSubmit(event){
  event.preventDefault();

  let newStoreName = event.target.storename.value;
  console.log(newStoreName);

  let newStoreCookiesPerCustomer = event.target.AvgCookiesPerCustomer.value;
  console.log(newStoreCookiesPerCustomer);

  let newStoreHourlyMin = event.target.MinHourlyCustomers.value;
  console.log(newStoreHourlyMin);

  let newStoreHourlyMax = event.target.MaxHourlyCustomers.value;
  console.log(newStoreHourlyMax);
}


//step 2: add event listener, pass in the two arguments:
//argument 1: event name
//argument 2: function name CALLBACK function

myForm.addEventListener('submit' , handleSubmit);
