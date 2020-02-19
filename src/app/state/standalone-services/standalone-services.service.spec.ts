import { TestBed } from '@angular/core/testing';

import { StandaloneServicesService } from './standalone-services.service';

describe('StandaloneServicesService', () => {
  let service: StandaloneServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StandaloneServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
