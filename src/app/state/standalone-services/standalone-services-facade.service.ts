import { Injectable } from '@angular/core';
import { StandaloneServicesService } from './standalone-services.service';

@Injectable()
export class StandaloneServicesFacade {
    constructor(private standaloneServicesService: StandaloneServicesService) {}

    get standaloneServices$() {
        return this.standaloneServicesService.getAll();
    }
}
