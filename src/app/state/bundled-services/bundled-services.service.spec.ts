import { TestBed } from '@angular/core/testing';

import { BundledServicesService } from './bundled-services.service';

describe('BundledServicesService', () => {
  let service: BundledServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BundledServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
