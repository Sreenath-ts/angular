import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgElse]'
})
export class NgElseDirective {

  @Input('appNgElse') set helper(value:Boolean){
     if(value){
         this.container.clear()
     }else{
      this.container.createEmbeddedView(this.templateRef)
     }
  }

  constructor(private templateRef:TemplateRef<any>,private container:ViewContainerRef) { }

}
