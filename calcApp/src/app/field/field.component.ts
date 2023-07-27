import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  @Input() name: string = '';
  @Input() min: number = 0;
  @Input() max: number = 0;
  @Input() unit: string = '';

  sliderValue: number = 0;

  @Output() valueChange = new EventEmitter<number>();
  
  onValueChange() {
    
    this.valueChange.emit(this.sliderValue);
  }  

}



