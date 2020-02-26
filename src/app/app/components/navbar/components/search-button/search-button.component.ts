import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss']
})
export class SearchButtonComponent {
  @Input() activeSearch: boolean;
  @Output() onClick = new EventEmitter();

  iconColour: string = '';
  iconName: string = 'search';

  constructor() { }

  onSearchClick() {
    this.onClick.emit();
    this.updateUI();
  }

  onMouseOver() {
    if (!this.activeSearch) {
      this.iconColour = 'accent';
    }
  }

  onMouseOut() {
    if (!this.activeSearch) {
      this.iconColour = '';
    }
  }

  updateUI() {
    this.iconColour = !this.activeSearch ? 'accent' : '';
  }
}
