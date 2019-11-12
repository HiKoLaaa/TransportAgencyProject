import {FormGroup, Validators} from '@angular/forms';
import {FindFormFormControl} from './find-form.form-control';

export class FindFormFormGroup extends FormGroup {
  constructor() {
    super({
      departurePlace: new FindFormFormControl('',
        'depPlace', 'Место отправления', Validators.required),

      departureDate: new FindFormFormControl('',
        'depDate', 'Дата отправления', Validators.required),

      arrivalPlace: new FindFormFormControl('',
        'arrPlace', 'Место прибытия', Validators.required),

      arrivalDate: new FindFormFormControl('',
        'arrDate', 'Дата прибытия', null),

      kindTransport: new FindFormFormControl('',
        'kindTransport', 'Вид транспорта', null)
    });
  }

  get productControls(): FindFormFormControl[] {
    return Object.keys(this.controls)
      .map(k => this.controls[k] as FindFormFormControl);
  }
}


