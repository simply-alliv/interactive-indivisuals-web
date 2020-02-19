import { NgModule } from '@angular/core';
import { EntityDataService } from '@ngrx/data';

import { StandaloneServicesFacade } from './standalone-services-facade.service';
import { StandaloneServicesDataService } from './standalone-services-data.service';

export const standaloneServiceEntityKey = 'StandaloneService';

@NgModule({
    providers: [
        StandaloneServicesDataService,
        StandaloneServicesFacade
    ]
})
export class StandaloneServicesStateModule {
    constructor(
        entityDataService: EntityDataService,
        standaloneServicesDataService: StandaloneServicesDataService,
    ) {
        entityDataService.registerService(standaloneServiceEntityKey, standaloneServicesDataService);
    }
}
