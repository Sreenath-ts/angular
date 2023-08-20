import { TestBed } from '@angular/core/testing';

import { CacheResponseService } from './cache-response.service';

describe('CacheResponseService', () => {
  let service: CacheResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
