import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  static capitalize(value: string) {
    return value.substr(0, 1).toUpperCase() +
      value.substr(1).toLowerCase();
  }

  transform(value: any, args?: any): any {
    const values = value.split(' ');
    let result = '';

    for (const v of values) {
      result += CamelCasePipe.capitalize(v) + ' ';
    }

    return result;
  }

}
