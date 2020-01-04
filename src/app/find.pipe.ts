import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'find',
  pure: false
})
export class FindPipe implements PipeTransform {

  transform(value: any, propertyName: string, searchStr: any[]): any {
    if (value.length === 0 || searchStr.length === 0) {
      return value;
    }
    let resultArray = [];
    for (const elem of value) {
      for (const elem2 of searchStr) {
        const str = elem[propertyName];

        if (str.indexOf(elem2) != -1) {
          resultArray.push(elem);
        }
      }
    }
    return resultArray;
  }

}
