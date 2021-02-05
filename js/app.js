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


console.log(myContainer);


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

//let allStores = [
//seattle[i],
//tokyo[i],
//dubai[i],
//paris[i],
//lima[i],
//];

function renderAll(){
  renderHeader();
  for (let i = 0; i < allStores.length; i++){
    allStores[i].render();
  }
}




function renderFooter(){
  let footer = document.getElementById('table-footer');
  for (let i = 0; i < allStores.length; i++){
    let td = document.createElement('td');
    td.textContent = allStores[i];
    footer.appendChild(td);
    //for (let j = 0; j < allStores.length; j++){
      //str += allStores[i][j];
    //}
    //console.log(str);
  }
}



new Store('seattle', 23, 65, 6.3, []);
new Store('tokyo', 3, 24, 1.2, []);
new Store('dubai', 11, 38, 3.7, []);
new Store('paris', 20, 38, 2.3, []);
new Store('lima', 2, 16, 4.6, []);


renderAll();
renderFooter();
//seattleStore.render();
//tokyoStore.render();
//dubaiStore.render();
//parisStore.render();
//limaStore.render();

