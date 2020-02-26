import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

import { SharedModule } from 'src/app/shared/shared.module';

import { FooterComponent } from './containers/footer/footer.component';
import { FooterMobileComponent } from './containers/footer-mobile/footer-mobile.component';
import { FooterDesktopComponent } from './containers/footer-desktop/footer-desktop.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';

@NgModule({
  declarations: [FooterComponent, FooterMobileComponent, FooterDesktopComponent, FooterSectionComponent],
  imports: [
    MatExpansionModule,
    SharedModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
