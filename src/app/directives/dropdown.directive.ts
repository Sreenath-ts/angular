import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

@HostBinding('class.open') open = false
 
  @HostListener('click')
  click(){
    this.open = ! this.open
  }

  constructor(private elementRef:ElementRef) { }

}
