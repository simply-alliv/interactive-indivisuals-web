import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './containers/navbar/navbar.component';

import { LogoComponent } from './components/logo/logo.component';
import { NavbarItemComponent } from './components/navbar-item/navbar-item.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SearchButtonComponent } from './components/search-button/search-button.component';
import { NavbarItemsComponent } from './components/navbar-items/navbar-items.component';
import { NavbarSectionComponent } from './components/navbar-section/navbar-section.component';

@NgModule({
  declarations: [NavbarComponent, LogoComponent, NavbarItemComponent, SearchbarComponent, SearchButtonComponent, NavbarItemsComponent, NavbarSectionComponent],
  imports: [
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    SharedModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
