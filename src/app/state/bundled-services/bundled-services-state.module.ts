import { NgModule } from '@angular/core';
import { EntityDataService } from '@ngrx/data';

import { BundledServicesFacade } from './bundled-services-facade.service';
import { BundledServicesDataService } from './bundled-services-data.service';

export const bundledServiceEntityKey = 'BundledService';

@NgModule({
    providers: [
        BundledServicesDataService,
        BundledServicesFacade
    ]
})
export class BundledServicesStateModule {
    constructor(
        entityDataService: EntityDataService,
        bundledServicesDataService: BundledServicesDataService,
    ) {
        entityDataService.registerService(bundledServiceEntityKey, bundledServicesDataService);
    }
}
