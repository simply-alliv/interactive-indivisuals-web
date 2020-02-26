import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerMobileBreakpoint = '(max-width: 1110px)';
  footerMatched: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.footerMatched = this.breakpointObserver.isMatched(this.footerMobileBreakpoint);
    this.breakpointObserver.observe(this.footerMobileBreakpoint).subscribe(
      state => this.footerMatched = state.matches
    )
  }
}
