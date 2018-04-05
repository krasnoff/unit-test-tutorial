import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(async(() => {
    component = new AppComponent();
  }));

  it('convert from 32 degrees', async(() => {
    const res = component.FahrenheitoCelsius(32);
    expect(res).toBe(0);
  }));

  it('convert from 212 degrees', async(() => {
    const res = component.FahrenheitoCelsius(212);
    expect(res).toBe(100);
  }));
});
