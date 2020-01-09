import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'find',
  pure: false
})
export class FindPipe implements PipeTransform {

  transform(value: any, propertyName: string, searchStr: string): any {
    if (value.length == 0 || searchStr.length == 0) {
      return value;
    }

    console.log('working')
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
