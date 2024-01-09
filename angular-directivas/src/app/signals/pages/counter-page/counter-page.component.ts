import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styles: ``,
})
export class CounterPageComponent {
  counter = signal(10);
  sqaureCounter = computed(() => Math.pow(this.counter(), 2));

  increasedBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
