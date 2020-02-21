import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent implements OnInit {
  activeSearch: boolean = false;
  menuOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

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
