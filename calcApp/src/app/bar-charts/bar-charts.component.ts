import { Component, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.css']
})
export class BarChartsComponent {

  productSales: any[] = []; 

  constructor(private cdRef: ChangeDetectorRef) { }


  update(updatedProductSales: any[]): void {
    //this.productSales = updatedProductSales;
    //console.log(this.productSales);  
    // Trigger change detection to update the view with new data
    //this.cdRef.detectChanges();
  }

  readRainbow(event: any){
    console.log(event);
  }

  
}
