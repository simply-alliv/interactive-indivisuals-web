import { Component } from '@angular/core';

import { FooterSection } from 'src/app/common/models';
import { footerSections } from 'src/app/state/mocks/footer-sections-mock';

@Component({
  selector: 'app-footer-mobile',
  templateUrl: './footer-mobile.component.html',
  styleUrls: ['./footer-mobile.component.scss']
})
export class FooterMobileComponent {
  footerSections: FooterSection[] = footerSections;
}
