import { Component } from '@angular/core';

import { NavbarSectionItemType } from 'src/app/common/enums';
import { NavbarItem } from 'src/app/common/models';
import { navbarItems } from 'src/app/state/mocks/navbar-items-mock';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss']
})
export class NavbarMenuComponent {
  navbarItems: NavbarItem[] = navbarItems;

  heroSectionItemType: NavbarSectionItemType = NavbarSectionItemType.hero;
  primaryLinkSectionItemType: NavbarSectionItemType = NavbarSectionItemType.primaryLink;
  secondaryLinkSectionItemType: NavbarSectionItemType = NavbarSectionItemType.secondaryLink;
}
