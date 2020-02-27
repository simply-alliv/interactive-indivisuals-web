import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { NavbarItem } from 'src/app/common/models';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss']
})
export class NavbarMenuComponent {
  @Input() items$: Observable<NavbarItem[]>;
}
