import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';

import { MarginlessDirective } from './directives/marginless/marginless.directive';

@NgModule({
  declarations: [
    BodyComponent,
    HeaderComponent,
    MarginlessDirective
  ],
  imports: [
    SharedModule
  ],
  exports: [
    BodyComponent,
    HeaderComponent,
    MarginlessDirective
  ]
})
export class TypographyModule { }
