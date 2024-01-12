import { Component, signal } from '@angular/core';
import { TitleComponent } from '@app/shared/title/title.component';

type Grade = 'A' | 'B' | 'C';

@Component({
  selector: 'dashboard-control-flow',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export default class ControlFlowComponent {
  showContent = signal(false);
  grade = signal<Grade>('C');
  frameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'NextJS']);
  frameworks2 = signal([]);

  toggleContent() {
    this.showContent.update((value) => !value);
  }
}
