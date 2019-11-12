import {FormGroup, Validators} from '@angular/forms';
import {FindFormFormControl} from './find-form.form-control';

export class FindFormFormGroup extends FormGroup {
  constructor() {
    super({
      departurePlace: new FindFormFormControl('',
        'departurePlace', 'Место отправления', Validators.required),

      departureDate: new FindFormFormControl('',
        'departureDate', 'Дата отправления', Validators.required),

      arrivalPlace: new FindFormFormControl('',
        'arrivalPlace', 'Место прибытия', Validators.required),

      arrivalDate: new FindFormFormControl('',
        'arrivalDate', 'Дата прибытия', null),

      kindTransport: new FindFormFormControl('',
        'kindTransport', 'Вид транспорта', null)
    });
  }

  get tripAllControls(): FindFormFormControl[] {
    return Object.keys(this.controls)
      .map(k => this.controls[k] as FindFormFormControl);
  }

  get tripDepartureControls(): FindFormFormControl[] {
    return [this.controls['departurePlace'] as FindFormFormControl,
      this.controls['departureDate'] as FindFormFormControl];
  }

  get tripArrivalControls(): FindFormFormControl[] {
    return [this.controls['arrivalPlace'] as FindFormFormControl,
      this.controls['arrivalDate'] as FindFormFormControl];
  }

  getFormErrors(): string[] {
    let messages: string[] = [];
    this.tripAllControls.forEach(c => c.getErrors()
      .forEach(m => messages.push(m)));

    return messages;
  }
}


