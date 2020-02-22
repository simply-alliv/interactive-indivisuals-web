import { Component, Input } from '@angular/core';

import { FontWeight } from 'src/app/common/enums';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  @Input() text: string;
  @Input() fontWeight = FontWeight.normal;
  @Input() isMarginless = false;

  fontWeightNormal = FontWeight.normal;
  fontWeightBold = FontWeight.bold;
}
