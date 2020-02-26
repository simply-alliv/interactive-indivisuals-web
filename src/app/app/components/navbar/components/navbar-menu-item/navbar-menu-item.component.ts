import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map,combineLatest } from 'rxjs/operators';

import { NavbarItem } from 'src/app/common/models';
import { FontWeight, NavbarSectionItemType } from 'src/app/common/enums';
import { BundlesService } from 'src/app/core/services';
import { BundlesUtils } from '../../utils';

@Component({
  selector: 'app-navbar-menu-item',
  templateUrl: './navbar-menu-item.component.html',
  styleUrls: ['./navbar-menu-item.component.scss']
})
export class NavbarMenuItemComponent implements OnInit {
  @Input() id: string

  item$: Observable<NavbarItem>;
  
  fontWeightBold = FontWeight.bold;

  heroSectionItemType: NavbarSectionItemType = NavbarSectionItemType.hero;
  primaryLinkSectionItemType: NavbarSectionItemType = NavbarSectionItemType.primaryLink;
  secondaryLinkSectionItemType: NavbarSectionItemType = NavbarSectionItemType.secondaryLink;

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
}
