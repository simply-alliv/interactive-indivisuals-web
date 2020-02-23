import { Entity } from '../entity.model';

export class Bundle implements Entity {
    id: string;
    name: string;
    description: string;

    constructor(id: string, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}