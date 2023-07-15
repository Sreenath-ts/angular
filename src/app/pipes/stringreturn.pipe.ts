import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringreturn'
})
export class StringreturnPipe implements PipeTransform {

  transform(value: string)  {
    return value.split('').reverse().join('').toUpperCase()
  }

}
