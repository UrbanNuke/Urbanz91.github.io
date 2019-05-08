import { Pipe, PipeTransform } from '@angular/core';
import { ICountry } from 'src/models';

@Pipe({
  name: 'selectedType'
})
export class SelectedTypePipe implements PipeTransform {

  public transform(countries: ICountry[], type: string): ICountry {
    if (!type) {
      return;
    }
    const oneCountry = countries.filter((country: ICountry) => {
      return country.type.countryName === type;
    });
    return oneCountry[0];
  }

}
