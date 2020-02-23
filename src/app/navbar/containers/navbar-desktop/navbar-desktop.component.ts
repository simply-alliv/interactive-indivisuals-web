import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BundlesService } from 'src/app/core/services';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar-desktop.component.html',
  styleUrls: ['./navbar-desktop.component.scss']
})
export class NavbarDesktopComponent {
  activeSearch: boolean = false;
  width: number = 0;
  
  itemIds$: Observable<string[]>;

  @ViewChild('navbarContainer', { read: ViewContainerRef }) navbarContainer: ViewContainerRef;

  constructor(private bundlesService: BundlesService) {}

  ngOnInit() {
    this.itemIds$ = this.bundlesService.getAllBundlesIds().pipe(
      map(ids => {
        ids.push('support');
        return ids;
      })
    );
  }

  ngAfterViewInit() {
    this.width = this.navbarContainer.element.nativeElement.offsetWidth;
  }

  onSearchClick() {
    this.activeSearch = !this.activeSearch;
  }
}
