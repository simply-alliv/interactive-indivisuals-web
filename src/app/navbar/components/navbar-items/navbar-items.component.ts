import { Component, Input } from '@angular/core';

import { NavbarItem } from 'src/app/common/models';

@Component({
  selector: 'app-navbar-items',
  templateUrl: './navbar-items.component.html',
  styleUrls: ['./navbar-items.component.scss']
})
export class NavbarItemsComponent {
  @Input() navbarItems: NavbarItem[];

  constructor() { }
}
