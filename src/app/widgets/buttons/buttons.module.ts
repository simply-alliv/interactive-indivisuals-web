import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import { SharedModule } from 'src/app/shared/shared.module';

import { ContainedButtonComponent } from './contained-button/contained-button.component';
import { TextButtonComponent } from './text-button/text-button.component';

@NgModule({
  declarations: [
    ContainedButtonComponent,
    TextButtonComponent
  ],
  imports: [
    MatButtonModule,
    SharedModule
    
  ],
  exports: [
    ContainedButtonComponent,
    TextButtonComponent
  ]
})
export class ButtonsModule { }
