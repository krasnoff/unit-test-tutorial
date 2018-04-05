import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { InputNumbersOnlyDirective } from './input-numbers-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputNumbersOnlyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
