import { NgModule } from '@angular/core';
import { EntityDataModule } from '@ngrx/data';

import { BundledServicesStateModule } from './bundled-services/bundled-services-state.module';
import { StandaloneServicesStateModule } from './standalone-services/standalone-services-state.module';

import { entityConfig } from './configs/entity-metadata.config';

@NgModule({
    imports: [
        EntityDataModule.forRoot(entityConfig),
        BundledServicesStateModule,
        StandaloneServicesStateModule
    ]
})
export class StateModule {}
