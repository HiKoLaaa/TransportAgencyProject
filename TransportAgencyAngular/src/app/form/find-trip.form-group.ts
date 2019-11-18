import {FormGroup, Validators} from '@angular/forms';
import {CustomFormControl} from './custom.form-control';

export class FindTripFormGroup extends FormGroup {
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

  get tripAllControls(): CustomFormControl[] {
    return Object.keys(this.controls)
      .map(k => this.controls[k] as CustomFormControl);
  }

  getFormErrors(): string[] {
    const messages: string[] = [];
    this.tripAllControls.forEach(c => c.getErrors()
      .forEach(m => messages.push(m)));

    return messages;
  }
}
