import { Component } from '@angular/core';

import { NavbarItem } from 'src/app/common/models';
import { navbarItems } from 'src/app/state/mocks/navbar-items-mock';

@Component({
  selector: 'app-navbar-items',
  templateUrl: './navbar-items.component.html',
  styleUrls: ['./navbar-items.component.scss']
})
export class NavbarItemsComponent {
  navbarItems: NavbarItem[] = navbarItems;

  constructor() {}
}