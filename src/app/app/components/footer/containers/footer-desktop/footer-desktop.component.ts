import { Component, Input } from '@angular/core';

import { FooterSection } from 'src/app/common/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer-desktop',
  templateUrl: './footer-desktop.component.html',
  styleUrls: ['./footer-desktop.component.scss']
})
export class FooterDesktopComponent {
  @Input() footerSections$: Observable<FooterSection[]>;
}
