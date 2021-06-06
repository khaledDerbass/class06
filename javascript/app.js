'use strict';

var salesTime = ['6 AM ', '7 AM', '8 AM ', '9 AM', '10 AM ', '11 AM', '12 PM ', '1 PM', '2 PM ', '3 PM', '4 PM ', '5 PM', '6 PM ', '7 PM    '];
//var salesLocations = ['Seattle','Tokyo','Dubai','Paris','lima'];
var salesLocations=[];
var totalOfDaily=0;

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
        this.salPerHour.push(Math.floor(getRndInteger(this.minVal, this.maxVal)*this.avg));
        this.totalOf+=this.salPerHour[i];
    }
    totalOfDaily+=this.totalOf;
}

SalesTimes.prototype.renderSales = function () {


    let locationsRow=document.createElement('tr');
    tableRest.appendChild(locationsRow);
    let locatName=document.createElement('td');
    locationsRow.appendChild(locatName);

    locatName.textContent=this.location;

    for(let j=0;j<salesTime.length;j++)
    {

        locatName=document.createElement('td');
        locationsRow.appendChild(locatName);
        locatName.textContent=this.salPerHour[j];

    }

    let tableBody1=document.createElement('td');
    locationsRow.appendChild(tableBody1);
    tableBody1.textContent=this.totalOf;


    
}


let Seatle = new SalesTimes('Seatle', 23, 65, 6.5);
let Tokyo = new SalesTimes('Tokyo', 3, 24, 1.2);
let Dubai = new SalesTimes('Dubai', 11, 38, 3.7);
let Paris = new SalesTimes('Paris', 20, 38, 2.3);
let lima = new SalesTimes('lima', 2, 16, 4.6);

for(let i=0;i<salesLocations.length;i++)
{
    salesLocations[i].randomSales();
    salesLocations[i].renderSales();
}
function footTotal ()
{

let tableRow2 = document.createElement('tr');
tableRest.appendChild(tableRow2);
let tableBody2 = document.createElement('th');
tableRow2.appendChild(tableBody2);
tableBody2.textContent = 'Totals';


    for(let y=0;y<salesTime.length;y++){
        let totalOfHours=0;
    for (let i = 0; i < salesLocations.length; i++) 
    {

        totalOfHours+=salesLocations[i].salPerHour[y];
        totalOfDaily+=salesLocations[i].salPerHour[y];

    }
    tableRest.appendChild(tableRow2);
    let tableBody3 = document.createElement('th');
    tableRow2.appendChild(tableBody3);
    tableBody3.textContent=totalOfHours;
    }



    
    
    let tFooter1 = document.createElement('th');
    tableRow2.appendChild(tFooter1);
    tFooter1.textContent = totalOfDaily;
}
footTotal();


    function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

///////////////////


    let newForm= document.getElementById("salesForm");

    newForm.addEventListener('submit',submitButt);

    function submitButt(event)
    {

     event.preventDefault();
  
  
     let newLocNam=event.target.nameOfLoc.value;
     let minParam=Number(event.target.minCustomers.value);
     let maxParam=Number(event.target.maxCustomers.value);
     let avgParam=Number(event.target.avgCustomers.value);
  
      let locNamMod=new SalesTimes(newLocNam,minParam,maxParam,avgParam);
  
     if (locNamMod.maxParam < newAddedLocation.minParam){
      document.getElementById("salesForm").reset();

      alert("Oops, try again MIN value should be less than the MAX value");
      
      }
  
      tableRest.removeChild(tableRest.lastChild);

      locNamMod.randomSales();
      locNamMod.renderSales();

      footTotal();


      document.getElementById("salesForm").reset();

    }
    document.getElementById("salesForm").reset();
