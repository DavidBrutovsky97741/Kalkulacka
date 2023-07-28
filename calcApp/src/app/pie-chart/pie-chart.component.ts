import { Component, OnInit,ChangeDetectorRef } from '@angular/core';

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
  KIS: number = 0;
  CZ: number = 0;

  barChartcustomColors = [
    { name: "Kumulatív investovaných peňazí", value: '#302841' },
    { name: "Čisltý zisk", value: '#fbc910' }
  ];

  constructor(private cdr: ChangeDetectorRef) {
    Object.assign(this, { productSales });
  }

  ngOnInit(): void {

  }

  update(updatedProductSales: any[]): void {
    this.CZ = (((updatedProductSales[3].value)*(updatedProductSales[4].value)/12)*((updatedProductSales[0].value/10)+1));
    this.productSales[0].value = this.CZ;
    this.KIS = (updatedProductSales[3].value)*(updatedProductSales[4].value);
    this.productSales[1].value = this.KIS;

    this.cdr.markForCheck();
    
    //console.log(this.productSales);
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

