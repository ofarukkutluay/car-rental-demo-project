import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color';

@Pipe({
  name: 'colorFilter'
})
export class ColorFilterPipe implements PipeTransform {

  transform(value: Color[], filterText: string): Color[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    let brandNameFilter = value.filter((c: Color) => c.name.toLocaleLowerCase().indexOf(filterText) !== -1);
    return filterText ? brandNameFilter : value
  }

}
