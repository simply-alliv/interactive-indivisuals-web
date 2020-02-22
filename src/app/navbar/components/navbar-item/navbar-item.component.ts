import { Component, Input } from '@angular/core';

import { NavbarItem } from 'src/app/common/models';
import { FontWeight } from 'src/app/common/enums';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent {
  @Input() navbarItem: NavbarItem
  
  menuOpen: boolean = false;
  buttonFontWeight = FontWeight.bold;

  onMenuOpened() {
    this.menuOpen = true;
  }

  onMenuClosed() {
    this.menuOpen = false;
  }
}
