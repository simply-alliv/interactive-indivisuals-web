import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { FooterSection } from 'src/app/common/models';

@Component({
  selector: 'app-footer-mobile',
  templateUrl: './footer-mobile.component.html',
  styleUrls: ['./footer-mobile.component.scss']
})
export class FooterMobileComponent {
  @Input() footerSections$: Observable<FooterSection[]>;
}
