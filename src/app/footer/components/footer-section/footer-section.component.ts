import { Component, Input } from '@angular/core';

import { FooterSection } from 'src/app/common/models';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss']
})
export class FooterSectionComponent {
  @Input() section: FooterSection;
  @Input() isGrid: boolean = false;
}
