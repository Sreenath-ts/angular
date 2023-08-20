import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'advancedPipe'
})
export class AdvancedPipePipe implements PipeTransform {

  transform(arr: any[], Skey:string) {
    const Spanregex = /<span[^>]*>([^<]*)<\/span>/g;
    if(Skey==''){

      return arr.map((item)=>{
        for(let key in item){
          if(typeof item[key] == 'string'){
            item[key] = item[key].replace(Spanregex, '$1')
          }
        }
        return item;
      })
    }
    const regex = new RegExp(Skey,'gi')
   
    return arr.filter((item)=>{
      for(let key in item){
        if(typeof item[key] == 'string'){
          item[key] = item[key].replace(Spanregex, '$1')
        }
      
        
          if(regex.test(item[key])){
             item[key] =(item[key] as string).replaceAll(regex,`<span>${Skey}</span>`) 
            return true;
          }
      }
      return false
    }) ;
  }

}
