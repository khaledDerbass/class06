'use strict';

var salesTime = ['6 AM ', '7 AM', '8 AM ', '9 AM', '10 AM ', '11 AM', '12 PM ', '1 PM', '2 PM ', '3 PM', '4 PM ', '5 PM', '6 PM ', '7 PM'];
var salesLocations = ['Seattle','Tokyo','Dubai','Paris','lima'];


function SalesTimes (nameSal,minSal,maxSal,AvgSal,TotalSal)
{
    this.location=nameSal;
    this.minVal=minSal;
    this.maxVal=maxSal;
    this.avg=AvgSal;
    this.totalOf=TotalSal;


    SalesTimes.prototype.randomSales=function () {
    for (var i = 0; i < hours.length; i++) 
    {
        this.salPerHour[i] = Math.floor(getRndInteger(this.minVal, this.maxVal)*this.avg);
        this.totalOf+=this.salPerHour[i];
    }
    }
    salesTime.push(this);


}

var parent= document.getElementById('salesTable');

var tableRest = document.createElement('table');


parent.appendChild(tableRest);

var rowHead = document.createElement('tr');

tableRest.appendChild(rowHead);


for (let z=0;z<salesTime.length;z++)
{
    let thElement=document.createElement('th');
    rowHead.appendChild(thElement);
    thElement.textContent=salesTime[z];
}

for(let j=0;j<salesLocations.length;j++)
{
    let locationsRow=document.createElement('tr');
    tableRest.appendChild(locationsRow);

    let nametd=document.createElement('td');
    locationsRow.appendChild(nametd);
    nametd.textContent=salesLocations[j];

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}