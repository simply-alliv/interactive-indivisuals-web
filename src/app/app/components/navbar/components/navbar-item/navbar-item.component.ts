import { Component, Input } from '@angular/core';

import { FontWeight } from 'src/app/common/enums';
import { NavbarItem } from 'src/app/common/models';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent {
  @Input() item: NavbarItem;
  
  menuOpen: boolean = false;
  buttonFontWeight = FontWeight.bold;

  onMenuOpened() {
    this.menuOpen = true;
  }

  onMenuClosed() {
    this.menuOpen = false;
  }
}
