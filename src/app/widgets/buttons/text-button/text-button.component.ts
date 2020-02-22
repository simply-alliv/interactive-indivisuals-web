import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss']
})
export class TextButtonComponent {
  @Input() color: ThemePalette;
  @Input() disabled: boolean;
  @Input() label: string;
  @Input() routerLink: string;
}
