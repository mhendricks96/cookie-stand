'use strict';

//global variables
//hours array
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

let allStores = [];
let table = document.getElementById('table');
//let myContainer = document.getElementById('container');
let tfoot = document.createElement('tfoot');
let footerTotals = [];
let grandTotal = 0;
//Event Handler
//step 1: get element from the DOM
let myForm = document.getElementById('container-two');

//console.log(myContainer);


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
  //this.render();
}

//this came from Math.random
Store.prototype.calcHourlyCustomers = function (){
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

Store.prototype.calcCookiesPerHour = function (){
  for (let i = 0; i < hours.length; i++){
    let customersThisHour = this.calcHourlyCustomers();
    let cookiesThisHour = Math.ceil(customersThisHour * this.avg);
    this.cookiesPerHour.push(cookiesThisHour);
    this.dailyTotal += cookiesThisHour;
  }
};

//Store.prototype.calcTotalCookies = function(){
//for (let i = 0; i < hours.length; i++){
//this.dailyTotal += this.cookiesPerHour[i];
//}
//};



Store.prototype.render = function () {

  this.calcCookiesPerHour();
  //create table
  let tbody = document.createElement('tbody');
  table.appendChild(tbody);

  let tr = document.createElement('tr');
  tbody.appendChild(tr);
  //create first row with store names
  let storeNames = document.createElement('th');
  storeNames.textContent = this.name;
  tr.appendChild(storeNames);

  //create loop for all store names
  for (let i = 0; i < hours.length; i++){
    //create element
    let td = document.createElement('td');
    //give it content
    td.textContent = this.cookiesPerHour[i];
    //append it to the DOM
    tr.appendChild(td);
  }
  //total column

  let totalColumn = document.createElement('td');
  totalColumn.textContent = this.dailyTotal;
  tr.appendChild(totalColumn);
};

//firstRow.appendChild(totalColumn);
//document.getElementById('table').appendChild(firstRow);
//allStores.push(this);




let renderHeader = function() {
  let thead = document.createElement('thead');
  table.appendChild(thead);

  let tr = document.createElement('tr');
  thead.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = 'Hours of Operation';
  tr.appendChild(th).textContent;

  for (let i = 0; i < hours.length; i++){
    let th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
  }

  th = document.createElement('th');
  th.textContent = 'Daily Store Totals';
  tr.appendChild(th);
};

let calcFooterTotals = function(){
  footerTotals = [];
  grandTotal = 0;
  for (let i = 0; i < hours.length; i++){
    let hourlyTotal = 0;
    for (let j = 0; j < allStores.length; j++){
      hourlyTotal += allStores[j].cookiesPerHour[i];
    }
    //these next 2 lines are what took me so long to figure out
    footerTotals.push(hourlyTotal);
    grandTotal += hourlyTotal;
  }
};

let renderAllStores = function() {
  for (let i = 0; i < allStores.length; i++){
    allStores[i].render();
  }
};



let renderFooter = function(){
  calcFooterTotals();
  table.appendChild(tfoot);

  let tr = document.createElement('tr');
  tfoot.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = 'Total Sales this hour';
  tr.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = footerTotals[i];
    tr.appendChild(td);
  }

  let td = document.createElement('td');
  td.textContent = grandTotal;
  tr.appendChild(td);
};



//form event handler
// step 3:declare the callback function with ONE parameter
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

  //let newStoreInfo = [newStoreName, newStoreHourlyMin, newStoreHourlyMax, newStoreCookiesPerCustomer, []];
  //console.log(newStore);

  let newStore = new Store(newStoreName, newStoreHourlyMin, newStoreHourlyMax, newStoreCookiesPerCustomer, []);
  newStore.render();
}




new Store('seattle', 23, 65, 6.3, []);
new Store('tokyo', 3, 24, 1.2, []);
new Store('dubai', 11, 38, 3.7, []);
new Store('paris', 20, 38, 2.3, []);
new Store('lima', 2, 16, 4.6, []);


renderAllStores();
renderFooter();
renderHeader();
//seattleStore.render();
//tokyoStore.render();
//dubaiStore.render();
//parisStore.render();
//limaStore.render();


//document.getElementById('tfoot').appendChild(footerRow);
//total();

//step 2: add event listener, pass in the two arguments:
//argument 1: event name
//argument 2: function name CALLBACK function

myForm.addEventListener('submit' , handleSubmit);
