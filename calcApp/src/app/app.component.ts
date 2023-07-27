import { Component, ViewChild } from '@angular/core';
import { BarChartsComponent } from '../app/bar-charts/bar-charts.component';
import { PieChartComponent } from '../app/pie-chart/pie-chart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calcApp';

  @ViewChild(BarChartsComponent) barChartsComponent!: BarChartsComponent;
  @ViewChild(PieChartComponent) pieChartComponent!: PieChartComponent;



  onFieldValueChange(value: number, id: string) {

    console.log('das');

    if(id=="RV"){
      productSales[0].value = value;
    }

    else if(id=="FC"){
      productSales[1].value = value;
    }

    else if(id=="AS"){
      productSales[3].value = value;
    }

    else if(id=="DS"){
      productSales[4].value = value;
    }

    else if(id=="MV"){
      productSales[5].value = value;
    }

    this.barChartsComponent.update(productSales);
    this.pieChartComponent.update(productSales);
  }
}
var productSales = [
  {
    "name": "Ročný výnos",
    "value": 0
  },
  {
    "name": "Finančný cieľ",
    "value": 0
  },
  {
    "name": "Aktuálny stav úspor",
    "value": 0
  },
  {
    "name": "Dĺžka sporenia",
    "value": 100
  },
  {
    "name": "Mesačný vklad",
    "value": 100
  }
];

