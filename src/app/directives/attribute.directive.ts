import { Directive,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective {

  constructor() { }

}
