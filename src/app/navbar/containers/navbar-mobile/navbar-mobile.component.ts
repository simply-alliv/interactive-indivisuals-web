import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent {
  @Input() itemIds$: Observable<string[]>;
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
