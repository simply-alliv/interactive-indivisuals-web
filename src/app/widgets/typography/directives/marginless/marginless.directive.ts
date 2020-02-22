import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMarginless]'
})
export class MarginlessDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.margin = 0;
 }
}
