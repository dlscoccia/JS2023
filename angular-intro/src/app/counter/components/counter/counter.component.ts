import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h2>Contador: {{ counter }}</h2>
    <button (click)="increasedBy(+1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increasedBy(-1)">-1</button>`,
})
export class CounterComponent {
  constructor() {}

  public counter: number = 10;

  increasedBy(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }
}
