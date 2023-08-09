import { TestBed } from '@angular/core/testing';

import { RoutePersistenceService } from './route-persistence.service';

describe('RoutePersistenceService', () => {
  let service: RoutePersistenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutePersistenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
