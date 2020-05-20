import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';

import { DisplayComponent } from './display/display.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { OperatorButtonComponent } from './operator-button/operator-button.component';
import { NumberButtonComponent } from './number-button/number-button.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DisplayComponent,
    CalculatorComponent,
    OperatorButtonComponent,
    NumberButtonComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
