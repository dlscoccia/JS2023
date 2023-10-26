import { Component } from '@angular/core';
import { Producto } from './producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'angular-store';
  age = 10;
  btn = false;
  names: string[] = ['a', 'b', 'c'];
  witdhImage = '10';
  box = {
    width: 10,
    height: 100,
    background: 'red',
  };

  register = {
    name: '',
    email: '',
    password: '',
  };

  productos: Producto[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/image.webp',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/image.webp',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/image.webp',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/image.webp',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/image.webp',
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/image.webp',
    },
  ];

  aja = () => {
    this.name = 'lola';
  };

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scroll);
  }

  onInput(event: Event) {
    const element = event.target as HTMLInputElement;
    this.name = element.value;
  }

  addName() {
    this.names.push(this.name);
    this.name = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  onRegister() {
    console.log(this.register);
  }
}
