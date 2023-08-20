import { TestBed } from '@angular/core/testing';

import { ModifyResponseInterceptor } from './modify-response.interceptor';

describe('ModifyResponseInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ModifyResponseInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ModifyResponseInterceptor = TestBed.inject(ModifyResponseInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
