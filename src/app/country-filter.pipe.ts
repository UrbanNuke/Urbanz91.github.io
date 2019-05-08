import { ICountry } from '../models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryFilter'
})
export class CountryFilter implements PipeTransform {

  public transform(countries: ICountry[]): string[] {
    const types = [];
    countries.forEach((country: ICountry) => {
      if (!types.includes(country.type.countryName)) {
        types.push(country.type.countryName);
      }
    });
    return types;
  }

}
