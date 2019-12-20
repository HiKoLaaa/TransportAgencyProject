import {AbstractControl, ValidationErrors, Validator} from '@angular/forms';
import {Country} from '../model/dbModel/country.model';

export class AvailableCountryValidator implements Validator {
  countries: Country[];

  constructor(countries: Country[]) {
    this.countries = countries;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.countries.find(country =>
      country.name === control.value) ? null : {notMatch: true};
  }
}
