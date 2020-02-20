import { NgModule } from '@angular/core';
import { EntityDataService } from '@ngrx/data';

import { BundledServicesDataService } from './bundled-services-data.service';

export const bundledServiceEntityKey = 'BundledService';

@NgModule({
    providers: [
        BundledServicesDataService
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
