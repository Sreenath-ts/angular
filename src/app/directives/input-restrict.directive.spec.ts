import { TestBed } from '@angular/core/testing';
import { InputRestrictDirective } from './input-restrict.directive';
import { ElementRef } from '@angular/core';
import { TagDirective } from './tag.directive';

describe('InputRestrictDirective', () => {
 beforeEach(()=>{
 const mockElementRf = {
    nativateElement : document.createElement('div')
  }
  TestBed.configureTestingModule({
    declarations:[InputRestrictDirective],
    providers:[{provide:ElementRef,useValue:mockElementRf}]
   })
 })

  it('should create an instance', () => {
  
   const directive = TestBed.inject(TagDirective)
    expect(directive).toBeTruthy();
  });
});
