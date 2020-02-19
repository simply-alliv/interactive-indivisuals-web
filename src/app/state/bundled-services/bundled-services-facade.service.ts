import { Injectable } from '@angular/core';
import { BundledServicesService } from './bundled-services.service';

@Injectable()
export class BundledServicesFacade {
    constructor(private bundledServicesService: BundledServicesService) {}

    get bundledServices$() {
        return this.bundledServicesService.getAll();
    }
}
