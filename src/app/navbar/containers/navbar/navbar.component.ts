import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navbarMobileBreakpoint = '(max-width: 1110px)';
  mobileMatched: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.mobileMatched = this.breakpointObserver.isMatched(this.navbarMobileBreakpoint);
    this.breakpointObserver.observe(this.navbarMobileBreakpoint).subscribe(
      state => this.mobileMatched = state.matches
    )
  }
}
