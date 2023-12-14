import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  heroesNames: string[] = ['Fonzilord', 'Tulylord', 'Quartziqueen'];
  deletedHeroe?: string;

  removeLastHero(): void {
    this.deletedHeroe = this.heroesNames.pop();
  }
}
