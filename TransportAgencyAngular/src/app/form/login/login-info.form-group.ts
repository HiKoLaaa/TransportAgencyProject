import {Validators} from '@angular/forms';
import {BaseFormGroup} from '../base.form-group';
import {LoginInfoFormControl} from './login-info.form-control';

export class LoginInfoFormGroup extends BaseFormGroup {
  constructor() {
    super({
      login: new LoginInfoFormControl('', 'login', 'Логин', Validators.required),
      password: new LoginInfoFormControl('', 'password', 'Пароль', Validators.required)
    });
  }
}
