import { Entity } from './entity.model';


export class StandaloneService implements Entity {
    id: string;
    name: string;
    description: string;
    bundleId: string;

    constructor(id: string, name: string, description: string, bundleId: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.bundleId = bundleId;
    }
}
