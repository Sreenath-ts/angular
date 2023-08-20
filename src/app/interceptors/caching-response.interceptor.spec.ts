import { TestBed } from '@angular/core/testing';

import { CachingResponseInterceptor } from './caching-response.interceptor';

describe('CachingResponseInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CachingResponseInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CachingResponseInterceptor = TestBed.inject(CachingResponseInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
