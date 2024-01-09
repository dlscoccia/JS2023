import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'signals-side-menu',
  templateUrl: './side-menu.component.html',
  styles: `
  li {
    cursor: pointer;
  }
  `,
})
export class SideMenuComponent {
  menuItems = signal<MenuItem[]>([
    {
      title: 'Counter',
      route: 'counter',
    },
    {
      title: 'User',
      route: 'user-info',
    },
    {
      title: 'Mutations',
      route: 'properties',
    },
  ]);
}
