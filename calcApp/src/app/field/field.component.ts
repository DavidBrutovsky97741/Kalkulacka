import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  @Input() name: string = '';
  @Input() min: number = 0 ;
  @Input() max: number = 0 ;
  @Input() unit: string = '' ;

  sliderValue: number = 0;

}
