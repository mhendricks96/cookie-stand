'use strict';

//global variables
//hours array
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
let cookieTable = document.getElementById('cookie-table');
let tableHeader = document.getElementById('table-header');
let tableFooter = document.getElementById('table-footer');
const allStores = [];


//Event Handler
//step 1: get element from the DOM
let myForm = document.getElementById('container-two');



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
}

//this came from Math.random
Store.prototype.calcHourlyCustomers = function (){
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

Store.prototype.calcCookiesPerHour = function (){
  this.calcHourlyCustomers();
  for (let i = 0; i < hours.length; i++){
    let customersThisHour = this.calcHourlyCustomers();
    let cookiesThisHour = Math.ceil(customersThisHour * this.avg);
    this.cookiesPerHour.push(cookiesThisHour);
    this.dailyTotal = this.dailyTotal = this.cookiesPerHour[i];
  }
};


Store.prototype.render = function () {

  this.calcCookiesPerHour();
  //create table

  let tr = document.createElement('tr');
  cookieTable.appendChild(tr);

  //create first row with store names
  let th = document.createElement('th');
  th.textContent = this.name;

  tr.appendChild(th);
  //create loop for all store names
  for (let i = 0; i < this.cookiesPerHour.length; i++){
    //create element
    let td = document.createElement('td');
    //give it content
    td.textContent = this.cookiesPerHour[i];
    //append it to the DOM
    tr.appendChild(td);
  }
  //total column

  let td = document.createElement('td');
  td.textContent = this.dailyTotal;
  tr.appendChild(td);
};


let renderHeader = function() {
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = '';
  tr.appendChild(th);

  for (let i = 0; i < hours.length; i++){
    let td = document.createElement('td');
    td.textContent = hours[i];
    tr.appendChild(td);
  }

  let td = document.createElement('td');
  td.textContent = 'Daily Store Totals';
  tr.appendChild(td);
  tableHeader.appendChild(tr);
};


let renderAllStores = function() {
  for (let i = 0; i < allStores.length; i++){
    allStores[i].render();
  }
};


let calcGrandTotals = function(){
  let newGrandTotal = new Array(hours.length + 1);

  newGrandTotal.fill(0);
  for (let i = 0; i < allStores.length; i++){
    for (let j = 0; j < allStores[i].cookiesPerHour.length; j++){
      newGrandTotal[j] += allStores[i].cookiesPerHour[j];
      newGrandTotal[newGrandTotal.length - 1] += allStores[i].cookiesPerHour[j];
    }

  }

  return newGrandTotal;
};


let renderFooter = function(){
  let newGrandTotal = calcGrandTotals();
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = 'Totals';
  tr.appendChild(th);

  for (let i = 0; i < newGrandTotal.length; i++) {
    let td = document.createElement('td');
    td.textContent = newGrandTotal[i];
    tr.appendChild(td);
  }
  tableFooter.appendChild(tr);
};



//form event handlr
// step 3:declare the callback function wth ONE parameter
//parameter = event


function handleSubmit(event){
  event.preventDefault();

  let newStoreName = event.target.storename.value;
  //console.log(newStoreName);

  let newStoreCookiesPerCustomer = +event.target.AvgCookiesPerCustomer.value;
  //console.log(newStoreCookiesPerCustomer);

  let newStoreHourlyMin = +event.target.MinHourlyCustomers.value;
  //console.log(newStoreHourlyMin);

  let newStoreHourlyMax = +event.target.MaxHourlyCustomers.value;
  //console.log(newStoreHourlyMax);


  let newStore = new Store(newStoreName, newStoreHourlyMin, newStoreHourlyMax, newStoreCookiesPerCustomer, []);
  newStore.render();
  //HERE IT IS!! THIS SHOULD CHANGE THE TOTALS WHEN ADDING A NEW STORE
  tableFooter.removeChild(tableFooter.lastChild);
  renderFooter();
}


//usable code
new Store('seattle', 23, 65, 6.3, []);
new Store('tokyo', 3, 24, 1.2, []);
new Store('dubai', 11, 38, 3.7, []);
new Store('paris', 20, 38, 2.3, []);
new Store('lima', 2, 16, 4.6, []);

renderHeader();
renderAllStores();
renderFooter();

//step 2: add event listener, pass in the two arguments:
//argument 1: event name
//argument 2: function name CALLBACK function

myForm.addEventListener('submit' , handleSubmit);
