import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BundlesService } from 'src/app/core/services';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent implements OnInit {
  activeSearch: boolean = false;
  menuOpen: boolean = false;

  itemIds$: Observable<string[]>;

  constructor(private bundlesService: BundlesService) { }

  ngOnInit() {
    this.itemIds$ = this.bundlesService.getAllBundlesIds().pipe(
      map(ids => {
        ids.push('support');
        return ids;
      })
    );
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
