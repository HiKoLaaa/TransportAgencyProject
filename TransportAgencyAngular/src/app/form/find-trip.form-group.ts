import {Validators} from '@angular/forms';
import {CustomFormControl} from './custom.form-control';
import {BaseFormGroup} from './base.form-group';

export class FindTripFormGroup extends BaseFormGroup {
  constructor() {
    super({
      departurePlace: new CustomFormControl('',
        'departurePlace', 'Место отправления', Validators.required),

      departureDate: new CustomFormControl('',
        'departureDate', 'Дата отправления', Validators.required),

      arrivalPlace: new CustomFormControl('',
        'arrivalPlace', 'Место прибытия', Validators.required),

      arrivalDate: new CustomFormControl('',
        'arrivalDate', 'Дата прибытия', null),

      kindTransport: new CustomFormControl('',
        'kindTransport', 'Вид транспорта', null)
    });
  }
}
