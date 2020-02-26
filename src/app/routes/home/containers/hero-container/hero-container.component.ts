import { Component } from '@angular/core';
import { S1LottieConfig } from '@sentinel-one/s1-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-hero-container',
  templateUrl: './hero-container.component.html',
  styleUrls: ['./hero-container.component.scss']
})
export class HeroContainerComponent {
  heroHeadline = 'Take Your Next Digital Step';
  heroDescription = 'We are a specialist digital transformation agency. Let us take your business to the ' + 
    'digital frontier through curated and personalised services.';
  heroButtonLabel = 'Explore Services';
  heroButtonRouterLink = '/services';
  lottieParams: S1LottieConfig = {
    renderer: 'canvas',
    loop: true,
    path: 'assets/lotties/logo-taking-steps.json',
    autoplay: true
  };
 
  onAnimationCreated(animation: AnimationItem) {
    animation.play();
  }
}
