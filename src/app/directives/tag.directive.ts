import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: 'appTag'
})
export class TagDirective  {

  constructor(private elementRef:ElementRef) { 
    elementRef.nativeElement.innerHTML = 'hello'
    elementRef.nativeElement.style.backgroundColor = 'yellow'
  }



}
