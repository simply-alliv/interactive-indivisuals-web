import { Component, Input } from '@angular/core';

import { FontWeight } from 'src/app/common/enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() text: string;
  @Input() fontWeight: FontWeight = FontWeight.normal;
  @Input() isMarginless = false;

  fontWeightNormal = FontWeight.normal;
  fontWeightBold = FontWeight.bold;
}
