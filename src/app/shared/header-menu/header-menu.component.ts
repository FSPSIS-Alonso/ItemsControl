import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss',
})
export class HeaderMenuComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Items',
        icon: 'pi pi-home',
        routerLink: './',
      },
      {
        label: 'Form-Item',
        icon: 'pi pi-star',
        routerLink: './item',
      },
    ];
  }
}
