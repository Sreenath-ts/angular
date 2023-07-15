import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {
   
  transform(array: any[],property:string){
    if(!Array.isArray(array) || !property){
      return array
    }
    const cacheKey = `${property}-${JSON.stringify(array)}`
    return array.slice().sort((a,b) : number=>{
       const valueA = this.getPropertyValue(a,property)
       const valueB = this.getPropertyValue(b,property)
      

       if(valueA < valueB){
           return -1;
       }else if(valueA > valueB){
        return 1
       }else{
        return 0
       } 
    }) ;
  }

  getPropertyValue(object:any,property:string){
    const properties = property.split('.')

    for(let prop of properties){
      object = object[prop]
    }

    return object;
  }

}
