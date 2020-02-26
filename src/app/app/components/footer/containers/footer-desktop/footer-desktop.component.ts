import { Component } from '@angular/core';

import { FooterSection } from 'src/app/common/models';
import { footerSections } from 'src/app/state/mocks/footer-sections-mock';

@Component({
  selector: 'app-footer-desktop',
  templateUrl: './footer-desktop.component.html',
  styleUrls: ['./footer-desktop.component.scss']
})
export class FooterDesktopComponent {
  footerSections: FooterSection[] = footerSections;
}
