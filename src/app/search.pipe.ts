import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, propertyName: string, searchStr: string): any {
    if (searchStr != undefined) {
      searchStr = searchStr.toLowerCase();
      let resultArr = [];
      for (let product of value) {
        let str = product[propertyName];
        str = str.toLowerCase();
        if (str.indexOf(searchStr) != -1) { //found substring
          resultArr.push(product);
        }
      }
      return resultArr;
    } else {
      return value;
    }



  }
}
