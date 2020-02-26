import { NgModule } from '@angular/core';
import { S1LottieModule } from '@sentinel-one/s1-lottie';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonsModule, TypographyModule } from 'src/app/widgets';

import { HomeComponent } from './containers/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroContainerComponent } from './containers/hero-container/hero-container.component';

@NgModule({
  declarations: [HomeComponent, HeroComponent, HeroContainerComponent],
  imports: [
    HomeRoutingModule,
    SharedModule,
    S1LottieModule,
    TypographyModule,
    ButtonsModule
  ]
})
export class HomeModule { }
