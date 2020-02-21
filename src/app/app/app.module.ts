import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from '../navbar/navbar.module';
import { StateModule } from '../state/state.module';

import { AppComponent } from './app.component';
import { ROOT_REDUCERS_TOKEN, metaReducers } from '../store';
import { CoreModule } from '../core/core.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarModule,
    FooterModule,
    CoreModule,
    EffectsModule.forRoot([]), 
    StateModule,
    StoreModule.forRoot(ROOT_REDUCERS_TOKEN, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
