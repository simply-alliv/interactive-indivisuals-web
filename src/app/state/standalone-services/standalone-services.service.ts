import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

import { StandaloneService } from 'src/app/common/models';
import { standaloneServiceEntityKey } from './standalone-services-state.module';

@Injectable({
  providedIn: 'root'
})
export class StandaloneServicesService extends EntityCollectionServiceBase<StandaloneService> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
      super(standaloneServiceEntityKey, serviceElementsFactory);
    }
}
