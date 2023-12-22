import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

type Gender = 'male' | 'female';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  name: string = 'Daniel';
  gender: Gender = 'male';
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  clients: string[] = [
    'Maria',
    'Pedro',
    'Raúl',
    'Fernando',
    'Alejandra',
    'Alfonso',
    'Melissa',
  ];
  clientsMap = {
    '=0': 'no tenemos clientes en espera.',
    '=1': 'tenemos # cliente en espera.',
    other: 'tenemos # clientes en espera.',
  };

  person = {
    name: 'Alfonso',
    age: 28,
    address: 'Neverland',
  };

  myObservableTimer: Observable<number> = interval(2000);

  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);
  });

  changeClient(): void {
    if (this.gender === 'male') {
      this.name = 'Alejandra';
      this.gender = 'female';
    } else {
      this.name = 'Daniel';
      this.gender = 'male';
    }
  }

  nextClient(): void {
    this.clients.shift();
  }
}
