import {Validators} from '@angular/forms';
import {CustomFormControl} from './custom.form-control';
import {BaseFormGroup} from './base.form-group';

export class LoginInfoFormGroup extends BaseFormGroup {
  constructor() {
    super({
      login: new CustomFormControl('', 'login', 'Логин', Validators.required),
      password: new CustomFormControl('', 'password', 'Пароль', Validators.required)
    });
  }
}
