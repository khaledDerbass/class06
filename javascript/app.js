'use strict';

var salesTime = ['6 AM ', '7 AM', '8 AM ', '9 AM', '10 AM ', '11 AM', '12 PM ', '1 PM', '2 PM ', '3 PM', '4 PM ', '5 PM', '6 PM ', '7 PM'];
//var salesLocations = ['Seattle','Tokyo','Dubai','Paris','lima'];
var salesLocations=[];

function SalesTimes (nameSal,minSal,maxSal,AvgSal)
{
    this.location=nameSal;
    this.minVal=minSal;
    this.maxVal=maxSal;
    this.avg=AvgSal;
    this.salPerHour=[];
    this.totalOf=0;
    salesLocations.push(this);
}
var parent= document.getElementById('salesTable');

var tableRest = document.createElement('table');
parent.appendChild(tableRest);

var tableRow = document.createElement('tr');
tableRest.appendChild(tableRow);


    let tableHeader1=document.createElement('th');
    tableRow.appendChild(tableHeader1);
    tableHeader1.textContent="";
    
for (let z=0;z<salesTime.length;z++)
{
    let tableHeader2=document.createElement('th');
    tableRow.appendChild(tableHeader2);
    tableHeader2.textContent=salesTime[z];
}

let tableHeader2=document.createElement('th');
tableRow.appendChild(tableHeader2);
tableHeader2.textContent='Daily Location Total';


SalesTimes.prototype.randomSales=function () {
    for (let i = 0; i < salesTime.length; i++) 
    {
        this.salPerHour[i] = Math.floor(getRndInteger(this.minVal, this.maxVal)*this.avg);
        this.totalOf+=this.salPerHour[i];
    }
}

SalesTimes.prototype.renderSales = function () {


    let locationsRow=document.createElement('tr');
    tableRest.appendChild(locationsRow);
    let locatName=document.createElement('td');
    locationsRow.appendChild(locatName);

    locatName.textContent=this.location;

    for(let j=0;j<salesTime.length;j++)
    {
       let tableBody=document.createElement('td');
        locationsRow.appendChild(tableBody);
        tableBody.textContent=this.avg[j];
    }

    let tableBody1=document.createElement('td');
    locationsRow.appendChild(tableBody1);
    tableBody1.textContent=this.totalOf;
}


let seatle = new SalesTimes('Seatle', 23, 65, 6.5);
let tokyo = new SalesTimes('Tokyo', 3, 24, 1.2);
let dubai = new SalesTimes('Dubai', 11, 38, 3.7);
let paris = new SalesTimes('Paris', 20, 38, 2.3);
let lima = new SalesTimes('lima', 2, 16, 4.6);

for(let i=0;i<salesLocations.length;i++)
{
    salesLocations[i].randomSales();
    salesLocations[i].renderSales();
}

let tableRow2 = document.createElement('tr');
    tableRest.appendChild(tableRow2);
    let tableBody2 = document.createElement('td');
    tableRow2.appendChild(tableBody2);
    tableBody2.textContent = 'Totals';

    for (let i = 0; i < hours.length; i++) {

        tableRest.appendChild(tableRow2);
        let tableBody3 = document.createElement('td');
        tableRow2.appendChild(tableBody3);
    }

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}