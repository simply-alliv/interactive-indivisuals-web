import { BundleSquares } from './bundle-squares.model';
import { Entity } from './entity.model';

export class BundledService implements Entity {
    id: string;
    name: string;
    description: string;
    bundleSquares: BundleSquares;

    constructor(id: string, name: string, description: string, bundledSquares: BundleSquares) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.bundleSquares = bundledSquares;
    }
}
