import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { NavbarItem } from 'src/app/common/models';

@Component({
  selector: 'app-navbar-menu-button',
  templateUrl: './navbar-menu-button.component.html',
  styleUrls: ['./navbar-menu-button.component.scss']
})
export class NavbarMenuButtonComponent {
  @Input() menuOpen: boolean;
  @Input() items$: Observable<NavbarItem[]>;
  @Output() onClick = new EventEmitter();
  @Output() menuClosed = new EventEmitter();

  iconColour: string = '';
  iconName: string = 'search';

  onMenuClick() {
    this.onClick.emit();
    this.updateUI();
  }

  onMenuClosed() {
    this.menuClosed.emit();
    this.updateUI();
  }

  onMouseOver() {
    if (!this.menuOpen) {
      this.iconColour = 'accent';
    }
  }

  onMouseOut() {
    if (!this.menuOpen) {
      this.iconColour = '';
    }
  }

  updateUI() {
    this.iconColour = !this.menuOpen ? 'accent' : '';
  }
}
