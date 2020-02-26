import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';

import { MarginlessDirective } from './directives/marginless/marginless.directive';
import { HeadlineComponent } from './headline/headline.component';

@NgModule({
  declarations: [
    BodyComponent,
    HeaderComponent,
    MarginlessDirective,
    HeadlineComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    BodyComponent,
    HeaderComponent,
    HeadlineComponent,
    MarginlessDirective
  ]
})
export class TypographyModule { }
