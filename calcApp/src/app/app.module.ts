import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';

import {FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent

  ],
  imports: [
    BrowserModule,    
    NoopAnimationsModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
