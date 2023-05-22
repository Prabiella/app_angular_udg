import { TestBed } from '@angular/core/testing';

import { ServiciosApiService } from './servicios-api.service';

describe('ServiciosApiService', () => {
  let service: ServiciosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
