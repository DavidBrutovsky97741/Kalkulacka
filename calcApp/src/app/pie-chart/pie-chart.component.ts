import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  productSales: any[] = [];
  view: any[number] = [300, 300];
  arcWidth: number = 0.5;
  counter: number = 0; 

  barChartcustomColors = [
    { name: "Kumulatív investovaných peňazí", value: '#302841' },
    { name: "Čisltý zisk", value: '#fbc910' }
  ];

  constructor() {
    Object.assign(this, { productSales });
  }

  ngOnInit(): void {

  }

  update(updatedProductSales: any[]): void {
    this.productSales = updatedProductSales;
    console.log(this.productSales);
    // Trigger change detection to update the view with new data
  }

  labelFormat: (label: any) => string = (label) => {
    // Customize the label format to display data values

    if(label=="Čisltý zisk"){
      this.counter = 0;
    }else{
      this.counter=1;
    }
    return productSales[this.counter].value.toLocaleString()+"%"; // This will format numbers as per your locale
  };

}


var productSales = [
  {
      "name" : "Čisltý zisk",
      "value": 20
  },{
      "name" : "Kumulatív investovaných peňazí",
      "value": 40
  }
  ];

