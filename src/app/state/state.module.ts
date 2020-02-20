import { NgModule } from '@angular/core';
import { EntityDataModule } from '@ngrx/data';

import { BundledServicesStateModule } from './bundled-services/bundled-services-state.module';
import { StandaloneServicesStateModule } from './standalone-services/standalone-services-state.module';

import { entityConfig } from './configs/entity-metadata.config';

import { BundledServicesFacade } from './bundled-services/bundled-services-facade.service';
import { StandaloneServicesFacade } from './standalone-services/standalone-services-facade.service';

@NgModule({
    imports: [
        EntityDataModule.forRoot(entityConfig),
        BundledServicesStateModule,
        StandaloneServicesStateModule
    ],
    providers: [
        BundledServicesFacade,
        StandaloneServicesFacade
    ]
})
export class StateModule {}
