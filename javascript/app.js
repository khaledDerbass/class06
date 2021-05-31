'use strict';

var hours = ['6 AM ', '7 AM', '8 AM ', '9 AM', '10 AM ', '11 AM', '12 PM ', '1 PM', '2 PM ', '3 PM', '4 PM ', '5 PM', '6 PM ', '7 PM'];


//parent.appendChild(ulElement);

function showTable(locObj) 
{

    var parent= document.getElementById('salesTable');
var articleElement=document.createElement('article');
var ulElement = document.createElement('ul');
articleElement.appendChild(ulElement);
    let name = document.createElement('h3');
    name.setAttribute("id", "location");
    name.textContent = locObj.nameObj;

    parent.appendChild(name);

    for (let x = 0; x < hours.length; x++) {

        let liElement = document.createElement('li');
      
        liElement.textContent = hours[x]+' : '+locObj.cookEachHour[x];

        // append
        ulElement.appendChild(liElement);
    }
    let totalcook = document.createElement('li');
    totalcook.setAttribute("id", "totalCook");
    ulElement.appendChild(totalcook);
    totalcook.textContent = 'Total : '+ locObj.total;

    parent.appendChild(articleElement);

}


let Seattle =
{   
    nameObj: "Seattle",
    minCust: 23,
    maxCust: 65,
    AvgCookie: 6.3,
    total:0 ,
    cookEachHour: [],
    RandCust: function () {
        for (var i = 0; i < hours.length; i++) {
            this.cookEachHour[i] = Math.floor(getRndInteger(this.minCust, this.maxCust)*this.AvgCookie);
            this.total+=this.cookEachHour[i];
        }
    }
    
}
Seattle.RandCust();
showTable(Seattle);
//console.log(Seattle.cookEachHour);



let Tokyo={

nameObj: "Tokyo",
 minCust:3,
 maxCust:24,
 AvgCookie: 1.2,
 total:0 ,
 cookEachHour: [],
 RandCust: function () {
    for (var i = 0; i < hours.length; i++) {
        this.cookEachHour[i] = Math.floor(getRndInteger(this.minCust, this.maxCust)*this.AvgCookie);
        this.total+=this.cookEachHour[i];
    }
}
}

Tokyo.RandCust();
showTable(Tokyo);

let Dubai={
nameObj: "Dubai",
 minCust:11,
 maxCust:38,
 AvgCookie: 3.7,
 total:0 ,
 cookEachHour: [],
 RandCust: function () {
    for (var i = 0; i < hours.length; i++) {
        this.cookEachHour[i] = Math.floor(getRndInteger(this.minCust, this.maxCust)*this.AvgCookie);
        this.total+=this.cookEachHour[i];
    }
}
}

Dubai.RandCust();
showTable(Dubai);

let Paris={
nameObj: "Paris",  
 minCust:20,
 maxCust:38,
 AvgCookie: 2.3,
 total:0 ,
 cookEachHour: [],
 RandCust: function () {
    for (var i = 0; i < hours.length; i++) {
        this.cookEachHour[i] = Math.floor(getRndInteger(this.minCust, this.maxCust)*this.AvgCookie);
        this.total+=this.cookEachHour[i];
    }
}
}

Paris.RandCust();
showTable(Paris);


let lima={
 nameObj: "lima",   
 minCust:2,
 maxCust:16,
 AvgCookie: 4.6,
 total: 0,
 cookEachHour: [],
 RandCust: function () {
    for (var i = 0; i < hours.length; i++) {
        this.cookEachHour[i] = Math.floor(getRndInteger(this.minCust, this.maxCust)*this.AvgCookie);
        this.total+=this.cookEachHour[i];
    }
}
}

lima.RandCust();
showTable(lima);
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
