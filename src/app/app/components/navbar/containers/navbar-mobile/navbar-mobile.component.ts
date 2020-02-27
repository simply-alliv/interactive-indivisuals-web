import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { NavbarItem } from 'src/app/common/models';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent {
  @Input() items$: Observable<NavbarItem[]>;
  activeSearch: boolean = false;
  menuOpen: boolean = false;

  onMenuClick() {
    this.toggleMenu();
  }

  onSearchClick() {
    this.activeSearch = !this.activeSearch;
  }

  onMenuClosed() {
    if (this.menuOpen) {
      this.toggleMenu();
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
