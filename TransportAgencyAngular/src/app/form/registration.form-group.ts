import {Validators} from '@angular/forms';
import {CustomFormControl} from './custom.form-control';
import {BaseFormGroup} from './base.form-group';
import {ConfirmPasswordValidator} from '../validator/confirm-password.validator';

export class RegistrationFormGroup extends BaseFormGroup {
  constructor() {
    super({
      login: new CustomFormControl('', 'login', 'Логин', Validators.required),
      email: new CustomFormControl('', 'email', 'Почтовый ящик', [Validators.required,
        Validators.email]),

      password: new CustomFormControl('', 'password', 'Пароль', [Validators.required,
        Validators.pattern('(?=^.{6,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$')]),

      confirmPassword: new CustomFormControl('', 'confirmPassword', 'Подтверждение пароля',
        Validators.required)
    });

    this.setValidators(ConfirmPasswordValidator.passwordValidate('password',
      'confirmPassword'));
  }
}
