import { Component, Input } from '@angular/core';

import { NavbarSection } from 'src/app/common/models';
import { NavbarSectionItemType } from 'src/app/common/enums';

@Component({
  selector: 'app-navbar-section',
  templateUrl: './navbar-section.component.html',
  styleUrls: ['./navbar-section.component.scss']
})
export class NavbarSectionComponent {
  @Input() section: NavbarSection;

  headerSectionItemType: NavbarSectionItemType = NavbarSectionItemType.header;
  heroSectionItemType: NavbarSectionItemType = NavbarSectionItemType.hero;
  primaryLinkSectionItemType: NavbarSectionItemType = NavbarSectionItemType.primaryLink;
  secondaryLinkSectionItemType: NavbarSectionItemType = NavbarSectionItemType.secondaryLink;

  constructor() { }
}
