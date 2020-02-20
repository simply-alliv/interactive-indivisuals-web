import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';

import { NavbarItemsComponent } from '../../components/navbar-items/navbar-items.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  activeSearch: boolean = false;
  width: number = 0;

  navbarPortal: ComponentPortal<any>;
  navbarItemsPortal = new ComponentPortal(NavbarItemsComponent);
  navbarSearchbarPortal = new ComponentPortal(SearchbarComponent);

  @ViewChild('navbarContainer', { read: ViewContainerRef }) navbarContainer: ViewContainerRef;
  
  constructor() {}

  ngAfterViewInit() {
    // Get the width of the navbar items component.
    //
    // It will be the navbar items component width because activeSearch is initially false
    // and searchbar component is, therefore, not rendered.
    this.width = this.navbarContainer.element.nativeElement.offsetWidth;
  }

  onSearchClick() {
    this.activeSearch = !this.activeSearch;
  }
}
