import { Component, ViewChild, ViewContainerRef, Input, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar-desktop.component.html',
  styleUrls: ['./navbar-desktop.component.scss']
})
export class NavbarDesktopComponent implements AfterViewInit {
  @Input() itemIds$: Observable<string[]>;
  activeSearch: boolean = false;
  width: number = 0;

  @ViewChild('navbarContainer', { read: ViewContainerRef }) navbarContainer: ViewContainerRef;

  ngAfterViewInit() {
    this.width = this.navbarContainer.element.nativeElement.offsetWidth;
  }

  onSearchClick() {
    this.activeSearch = !this.activeSearch;
  }
}
