import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

import { BundledService } from 'src/app/common/models';
import { bundledServiceEntityKey } from './bundled-services-state.module';

@Injectable({
  providedIn: 'root'
})
export class BundledServicesService extends EntityCollectionServiceBase<BundledService> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
      super(bundledServiceEntityKey, serviceElementsFactory);
    }
}
