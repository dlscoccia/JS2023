import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  nameLower: string = 'fonzi';
  nameUpper: string = 'FONZI';
  fullName: string = 'fOnZi LoRd';
  customDate: Date = new Date();
}
