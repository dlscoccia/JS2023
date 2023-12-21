import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './shared-box.component.html',
  styles: ``,
})
export class SearchBoxComponent implements OnInit {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Input()
  placeholder: string = '';

  @Input()
  initialValue: string = '';

  @Output()
  onDebounce = new EventEmitter<string>();

  @ViewChild('txtInput')
  textInput!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(debounceTime(1000))
      .subscribe((value) => this.onDebounce.emit(value));
  }

  ngOnDestroy() {
    this.debouncerSuscription?.unsubscribe();
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}
