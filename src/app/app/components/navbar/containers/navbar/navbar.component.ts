import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, combineLatest } from 'rxjs/operators';

import { BundlesService } from 'src/app/core/services';
import { NavbarItem } from 'src/app/common/models';
import { BundlesUtils } from '../../utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarMobileBreakpoint = '(max-width: 1110px)';
  mobileMatched: boolean;
  items$: Observable<NavbarItem[]>;

  constructor(private breakpointObserver: BreakpointObserver, private bundlesService: BundlesService) {
    this.mobileMatched = this.breakpointObserver.isMatched(this.navbarMobileBreakpoint);
    this.breakpointObserver.observe(this.navbarMobileBreakpoint).subscribe(
      state => this.mobileMatched = state.matches
    )
  }

  ngOnInit() {
    this.items$ = this.bundlesService.getAllBundles().pipe(
      combineLatest(this.bundlesService.getAllServices()),
      map(([bundles, services]) => {
        const navbarItems: NavbarItem[] = [];

        bundles.forEach(bundle => {
          if (bundle.id !== 'bundles') {
            const bundleServices = services.filter(service => service.bundleId === bundle.id);
            navbarItems.push(BundlesUtils.convertBundleToNavbarItem(bundle, bundleServices));
          }
        });

        navbarItems.push(BundlesUtils.supportNavbarItem);
        console.log(navbarItems);

        return navbarItems;
      })
    );
  }
}
