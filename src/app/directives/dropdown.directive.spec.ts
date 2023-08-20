import { TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { TagDirective } from './tag.directive';

describe('TagDirective', () => {
  beforeEach(() => {
    // Create a mock ElementRef
    const mockElementRef = {
      nativeElement: document.createElement('div'),
    };

    TestBed.configureTestingModule({
      declarations: [TagDirective],
      providers: [
        // Provide the mock ElementRef as a provider for the TagDirective
        { provide: ElementRef, useValue: mockElementRef },
      ],
    });
  });

  it('should create an instance', () => {
    const directive = TestBed.inject(TagDirective);
    expect(directive).toBeTruthy();
  });
});
