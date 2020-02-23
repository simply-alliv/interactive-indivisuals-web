import { NgModule } from '@angular/core';
import { BundlesService, NavbarService } from './services';

@NgModule({
  providers: [
    BundlesService,
    NavbarService
  ]
})
export class CoreModule {}
