import {Validators} from '@angular/forms';
import {BaseFormGroup} from '../base.form-group';
import {CustomerInfoFormControl} from './customer-info.form-control';

export class CustomerInfoFormGroup extends BaseFormGroup {
  constructor() {
    super({
      firstName: new CustomerInfoFormControl('', 'firstName', 'Имя', Validators.required),
      secondName: new CustomerInfoFormControl('', 'secondName', 'Фамилия', Validators.required),
      number: new CustomerInfoFormControl('', 'number', 'Номер телефона', Validators.required)
    });
  }
}
