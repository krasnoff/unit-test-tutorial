import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  txtDegreesInFahrenheit: number;

  constructor()
  {
    this.txtDegreesInFahrenheit = 32;
  }

  FahrenheitoCelsius(fahrenheit: number) : number
  {
    return (fahrenheit - 32) * 5 / 9;
  }
}
