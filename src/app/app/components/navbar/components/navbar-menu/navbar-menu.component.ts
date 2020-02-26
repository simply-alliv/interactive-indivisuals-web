import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, combineLatest, mergeMap } from 'rxjs/operators';

import { NavbarSectionItemType, FontWeight } from 'src/app/common/enums';
import { NavbarItem } from 'src/app/common/models';
import { BundlesService } from 'src/app/core/services';
import { BundlesUtils } from '../../utils';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss']
})
export class NavbarMenuComponent {
  @Input() itemIds$: Observable<string[]>;
}
