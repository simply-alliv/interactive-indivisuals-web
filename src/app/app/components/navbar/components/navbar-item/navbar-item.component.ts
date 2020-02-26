import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, combineLatest } from 'rxjs/operators';

import { FontWeight } from 'src/app/common/enums';
import { NavbarItem } from 'src/app/common/models';

import { BundlesService } from 'src/app/core/services';
import { BundlesUtils } from '../../utils';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent implements OnInit {
  @Input() id: string

  item$: Observable<NavbarItem>;
  
  menuOpen: boolean = false;
  buttonFontWeight = FontWeight.bold;

  constructor(private bundlesService: BundlesService) {}

  ngOnInit() {
    if (this.id !== 'support') {
      this.item$ = this.bundlesService.getBundleById(this.id).pipe(
        combineLatest(this.bundlesService.getAllBundleServicesById(this.id)),
        map(([bundle, services]) => BundlesUtils.convertBundleToNavbarItem({ ...bundle, id: this.id }, services))
      );
    } else {
      this.item$ = of(BundlesUtils.supportNavbarItem);
    }
  }

  onMenuOpened() {
    this.menuOpen = true;
  }

  onMenuClosed() {
    this.menuOpen = false;
  }
}
