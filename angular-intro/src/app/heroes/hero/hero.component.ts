import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  name: string = 'fonzilord';
  age: number = 8;
  show: string = 'show';

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'tulyLord';
    this.show = '';
  }

  changeAge(): void {
    this.age = 18;
  }

  reset(): void {
    this.name = 'fonzilord';
    this.age = 8;
  }
}
