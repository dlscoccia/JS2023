import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '@app/app.routes';

@Component({
  selector: 'shared-side-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
  styles: ``,
})
export class SideMenuComponent {
  menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'));

  constructor() {}
}
