import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'voweltonumber'
})
export class VoweltonumberPipe implements PipeTransform {

  transform(value:any):any{
    return value.replace('e','3')
  }

}
