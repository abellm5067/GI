import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';

@Pipe({
  name: 'append'
})
export class AppendPipe implements PipeTransform {

  transform(value: any, args?: any[]): any {
    return "Hi "+value ;
  }

}
