import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

import { bundledServiceEntityKey } from '../bundled-services/bundled-services-state.module';
import { standaloneServiceEntityKey } from '../standalone-services/standalone-services-state.module';

const entityMetadata: EntityMetadataMap = {
  [bundledServiceEntityKey]: {},
  [standaloneServiceEntityKey]: {}
};

const pluralNames = {  };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
