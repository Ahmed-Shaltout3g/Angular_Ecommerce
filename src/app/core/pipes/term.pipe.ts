import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'term'
})
export class TermPipe implements PipeTransform {

  transform(text:string , limit:number): unknown {
    return text.split(" ",limit).join(' ');
  }

}
