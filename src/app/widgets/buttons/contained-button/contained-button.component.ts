import { Component, Input } from '@angular/core';

import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-contained-button',
  templateUrl: './contained-button.component.html',
  styleUrls: ['./contained-button.component.scss']
})
export class ContainedButtonComponent {
  @Input() color: ThemePalette;
  @Input() disabled: boolean;
  @Input() label: string;
  @Input() routerLink: string;
}
