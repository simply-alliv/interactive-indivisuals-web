import { Component, Input } from '@angular/core';

import { FontWeight, NavbarSectionItemType } from 'src/app/common/enums';

@Component({
  selector: 'app-navbar-menu-item',
  templateUrl: './navbar-menu-item.component.html',
  styleUrls: ['./navbar-menu-item.component.scss']
})
export class NavbarMenuItemComponent {
  @Input() item: string
  
  fontWeightBold = FontWeight.bold;

  heroSectionItemType: NavbarSectionItemType = NavbarSectionItemType.hero;
  primaryLinkSectionItemType: NavbarSectionItemType = NavbarSectionItemType.primaryLink;
  secondaryLinkSectionItemType: NavbarSectionItemType = NavbarSectionItemType.secondaryLink;
}
