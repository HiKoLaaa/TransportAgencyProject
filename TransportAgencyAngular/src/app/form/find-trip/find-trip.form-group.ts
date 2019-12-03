import {Validators} from '@angular/forms';
import {BaseFormGroup} from '../base.form-group';
import {FindTripFormControl} from './find-trip.form-control';

export class FindTripFormGroup extends BaseFormGroup {
  constructor() {
    super({
      departurePlace: new FindTripFormControl('',
        'departurePlace', 'Место отправления', Validators.required),

      departureDate: new FindTripFormControl('',
        'departureDate', 'Дата отправления', Validators.required),

      arrivalPlace: new FindTripFormControl('',
        'arrivalPlace', 'Место прибытия', Validators.required),

      arrivalDate: new FindTripFormControl('',
        'arrivalDate', 'Дата прибытия', null),

      kindTransport: new FindTripFormControl('',
        'kindTransport', 'Вид транспорта', null)
    });
  }
}
