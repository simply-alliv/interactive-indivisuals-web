import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BundlesService } from 'src/app/core/services';
import { FooterSection } from 'src/app/common/models';
import { FooterUtils } from '../../utils';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerMobileBreakpoint = '(max-width: 1110px)';
  footerMatched: boolean;

  footerSections$: Observable<FooterSection[]>;

  constructor(private breakpointObserver: BreakpointObserver, private bundlesService: BundlesService) {
    this.footerMatched = this.breakpointObserver.isMatched(this.footerMobileBreakpoint);
    this.breakpointObserver.observe(this.footerMobileBreakpoint).subscribe(
      state => this.footerMatched = state.matches
    );
  }

  ngOnInit() {
    this.footerSections$ = this.bundlesService.getRandomServices().pipe(
      map(services =>  FooterUtils.addServicesSectionToFooterSections(services))
    )
  }
}
