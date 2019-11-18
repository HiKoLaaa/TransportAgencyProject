import {AbstractControl, ValidationErrors, Validator} from '@angular/forms';
import {Place} from '../model/dbModel/place.model';

export class AvailablePlaceValidator implements Validator {
  places: Place[];

  constructor(places: Place[]) {
    this.places = places;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.places.filter(value => value.name === control.value).length === 0 ? {notFound: true} : null;
  }
}
