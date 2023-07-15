import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  private map = new Map()
  
  transform(array: any[],searchTerm:string,properties:any[]){
    if(searchTerm == '') return array
    const  Searchregex = new RegExp(searchTerm,'i')

   return  array.filter(items => {
      for(let key in items){
        if(!properties.includes(key)){
          continue;
        }
       
        if(Searchregex.test(items[key])){
          return true;
        }
      }
      return false
    })
  }

}
