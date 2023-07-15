import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trunc'
})
export class TruncPipe implements PipeTransform {

  transform(value: string,customEllipse:string) {
    if(value.length > 5){
      value = value.slice(0,5)
      value += customEllipse
    }
    return value;
  }

}
