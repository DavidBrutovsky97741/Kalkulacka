import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-double-field',
  templateUrl: './double-field.component.html',
  styleUrls: ['./double-field.component.css']
})
export class DoubleFieldComponent {
  @Input() name: string = '';
  @Input() min: number = 0;
  @Input() max: number = 0;
  @Input() unit: string = '';

  sliderValue: number = 0;

  maxMonths: number = this.max;

  getYearsAndMonths(): { years: number; months: number } {
    const years = Math.floor(this.sliderValue / 12);
    const months = this.sliderValue % 12;
    return { years, months };
  }

  @Output() valueChange = new EventEmitter<number>();

  onValueChange() {
    this.valueChange.emit(this.sliderValue);
  }  
  
}
