import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message: string = '';

  constructor() {
    console.log('constructor');
  }

  ngOnchanges(changes: SimpleChange) {
    console.log('onchange', changes);
  }

  ngOnInit() {
    console.log('onInit');
  }

  ngAfterViewInit() {
    console.log('afterViewInit: child rendered');
  }

  ngOnDestroy() {
    console.log('onDestroy');
  }
}
