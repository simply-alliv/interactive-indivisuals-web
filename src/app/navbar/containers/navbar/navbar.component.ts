import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { BundlesService } from 'src/app/core/services';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarMobileBreakpoint = '(max-width: 1110px)';
  mobileMatched: boolean;
  itemIds$: Observable<string[]>;

  constructor(private breakpointObserver: BreakpointObserver, private bundlesService: BundlesService) {
    this.mobileMatched = this.breakpointObserver.isMatched(this.navbarMobileBreakpoint);
    this.breakpointObserver.observe(this.navbarMobileBreakpoint).subscribe(
      state => this.mobileMatched = state.matches
    )
  }

  ngOnInit() {
    this.itemIds$ = this.bundlesService.getAllBundlesIds().pipe(
      map(ids => {
        ids.push('support');
        return ids;
      })
    );
  }
}
