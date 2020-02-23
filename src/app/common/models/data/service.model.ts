import { Entity } from '../entity.model';


export class Service extends Entity {
    name: string;
    description: string;
    bundleId: string;

    constructor(id: string, name: string, description: string, bundleId: string) {
        super(id);
        this.name = name;
        this.description = description;
        this.bundleId = bundleId;
    }
}
