import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputRestrict]'
})
export class InputRestrictDirective {

@Input('appInputRestrict') allowedRegex!:string
@Input('predefined') predefined!:string
private emailRegex :RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

@HostListener('input')
OnInput(){
  let valid!:Boolean;
  const value = this.elementRef.nativeElement.value;
  if(this.predefined!='' && this.predefined=='email'){
     valid = this.emailRegex.test(value)
  }else{
    console.log(this.allowedRegex)
     valid = new RegExp(this.allowedRegex).test(value)
  }
  if(!valid) this.elementRef.nativeElement.style.backgroundColor = `red`
  else this.elementRef.nativeElement.style.backgroundColor = `green`
}

  constructor(private elementRef:ElementRef<HTMLInputElement>) { }

}
