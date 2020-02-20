import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {PortalModule} from '@angular/cdk/portal';

import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './containers/navbar/navbar.component';

import { LogoComponent } from './components/logo/logo.component';
import { NavbarItemComponent } from './components/navbar-item/navbar-item.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SearchButtonComponent } from './components/search-button/search-button.component';
import { NavbarItemsComponent } from './components/navbar-items/navbar-items.component';
import { NavbarSectionComponent } from './components/navbar-section/navbar-section.component';
import { NavbarContainerComponent } from './components/navbar-container/navbar-container.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LogoComponent,
    NavbarItemComponent,
    NavbarItemsComponent,
    SearchbarComponent,
    SearchButtonComponent,
    NavbarSectionComponent,
    NavbarContainerComponent
  ],
  imports: [
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    PortalModule,
    SharedModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
