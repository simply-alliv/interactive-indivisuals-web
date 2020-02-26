import { Component, Input, Output, EventEmitter } from '@angular/core';

import { S1LottieConfig } from '@sentinel-one/s1-lottie';
import { AnimationItem } from 'lottie-web';

import { FontWeight } from 'src/app/common/enums';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input('options') lottieParams: S1LottieConfig;
  @Input() headline: string;
  @Input() description: string;
  @Input() buttonLabel: string;
  @Input() buttonRouterLink: string;

  @Output() animationCreated = new EventEmitter<AnimationItem>();
  @Output() onClick = new EventEmitter();

  fontWeightBold = FontWeight.bold;

  onAnimationCreated(animation: AnimationItem) {
    this.animationCreated.emit(animation);
  }

  onButtonClick() {
    this.onClick.emit();
  }
}
