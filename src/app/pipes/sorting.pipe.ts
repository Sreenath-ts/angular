import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {
   private cache = new Map()
  transform(array: any[],property:string){
    if(!Array.isArray(array) || !property){
      return array
    }
    const cacheKey = `${property}-${JSON.stringify(array)}`
    if(this.cache.has(cacheKey)){
      console.log('caching>>>>>>>>>>>>');
      
      return this.cache.get(cacheKey)
    }
    const sortData = array.slice().sort((a,b) : number=>{
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
     this.cache.set(cacheKey,sortData)
    return sortData;
  }

  getPropertyValue(object:any,property:string){
    const properties = property.split('.')

    for(let prop of properties){
      object = object[prop]
    }

    return object;
  }

}
