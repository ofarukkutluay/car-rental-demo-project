import { Pipe, PipeTransform } from '@angular/core';
import { CarDto } from '../models/carDto';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: CarDto[], filterText: string): CarDto[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    let brandNameFilter = value.filter((c: CarDto) => c.brandName.toLocaleLowerCase().indexOf(filterText) !== -1);
    return filterText ? brandNameFilter : value
  }

}
