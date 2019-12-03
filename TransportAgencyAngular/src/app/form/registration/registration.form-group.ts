import {Validators} from '@angular/forms';
import {BaseFormGroup} from '../base.form-group';
import {ConfirmPasswordValidator} from '../../validator/confirm-password.validator';
import {RegistrationFormControl} from './registration.form-control';

export class RegistrationFormGroup extends BaseFormGroup {
  constructor() {
    super({
      login: new RegistrationFormControl('', 'login', 'Имя пользователя', [Validators.required,
        Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_\\.]{1,20}$')]),

      email: new RegistrationFormControl('', 'email', 'Почтовый ящик', [Validators.required,
        Validators.email]),

      password: new RegistrationFormControl('', 'password', 'Пароль', [Validators.required,
        Validators.pattern('(?=^.{6,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$')]),

      confirmPassword: new RegistrationFormControl('', 'confirmPassword', 'Подтверждение пароля',
        Validators.required)
    });

    this.setValidators(ConfirmPasswordValidator.passwordValidate('password',
      'confirmPassword'));
  }
}
