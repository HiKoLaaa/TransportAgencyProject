import {Validators} from '@angular/forms';
import {CustomFormControl} from './custom.form-control';
import {BaseFormGroup} from './base.form-group';

export class CustomerInfoFormGroup extends BaseFormGroup {
  constructor() {
    super({
      firstName: new CustomFormControl('', 'firstName', 'Имя', Validators.required),
      secondName: new CustomFormControl('', 'secondName', 'Фамилия', Validators.required),
      number: new CustomFormControl('', 'number', 'Номер телефона', Validators.required)
    });
  }
}
