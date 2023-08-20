import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIterate]'
})
export class IterateDirective {

@Input('appIterate') set iterate(obj:any){
   this.viewContainer.clear()
 
  for(let key in obj){
       
      this.viewContainer.createEmbeddedView(this.templateRef,{key:key.toString()})
  }

}

  constructor(private templateRef:TemplateRef<unknown>,private viewContainer:ViewContainerRef) { }

}
