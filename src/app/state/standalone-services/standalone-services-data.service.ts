import { Injectable } from '@angular/core';

import { StandaloneService } from 'src/app/common/models';
import { IndexedDBDataService } from '../shared/indexed-db-data-service';
import { standaloneServiceEntityKey } from './standalone-services-state.module';

@Injectable()
export class StandaloneServicesDataService extends IndexedDBDataService<StandaloneService> {
    constructor() {
        super(standaloneServiceEntityKey);
    }
}
