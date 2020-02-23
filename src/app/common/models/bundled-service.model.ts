import { Entity } from './entity.model';
import { ServiceID } from '../enums';

export class BundledService implements Entity {
    id: string;
    name: string;
    description: string;
    featuredServicesIds: ServiceID[];

    constructor(id: string, name: string, description: string, featuredServicesIds: ServiceID[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.featuredServicesIds = featuredServicesIds;
    }
}
