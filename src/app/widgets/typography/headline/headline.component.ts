import { Component, Input } from '@angular/core';

import { FontWeight } from 'src/app/common/enums';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent {
  @Input() text: string;
  @Input() fontWeight: FontWeight = FontWeight.normal;
  @Input() isMarginless = false;

  fontWeightNormal = FontWeight.normal;
  fontWeightBold = FontWeight.bold;
}
