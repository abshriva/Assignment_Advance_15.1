import { Pipe, PipeTransform } from '@angular/core';
/**
 * 
 * 
 * @export
 * @class SearchPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'searchBy',
   pure: false
})


export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any[]): any {
    if (value.length !== 0) {
      return value.filter((item) => item.name.startsWith(args));
    } else {
      return [];
    }
  };

}