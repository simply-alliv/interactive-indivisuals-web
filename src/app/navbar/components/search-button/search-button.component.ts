import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss']
})
export class SearchButtonComponent {
  searchIconColour: string = '';
  iconName: string = 'search';

  constructor() { }

  @HostListener('click', ['$event.target'])
  onClick() {}

  @HostListener('mouseover')
  onMouseOver() {
    this.searchIconColour = 'accent';
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.searchIconColour = '';
  }
}
