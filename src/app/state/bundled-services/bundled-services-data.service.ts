import { Injectable } from '@angular/core';

import { BundledService } from 'src/app/common/models';
import { IndexedDBDataService } from '../shared/indexed-db-data-service';
import { bundledServiceEntityKey } from './bundled-services-state.module';

@Injectable()
export class BundledServicesDataService extends IndexedDBDataService<BundledService> {
    constructor() {
        super(bundledServiceEntityKey);
    }
}
