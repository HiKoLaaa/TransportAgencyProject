import {Validators} from '@angular/forms';
import {BaseFormGroup} from '../base.form-group';
import {ConfirmPasswordValidator} from '../../validator/confirm-password.validator';
import {ChangePasswordFormControl} from './change-password.form-control';

export class ChangePasswordFormGroup extends BaseFormGroup {
  constructor() {
    super({
      oldPassword: new ChangePasswordFormControl('', 'oldPassword', 'Старый пароль',
        [Validators.required]),

      newPassword: new ChangePasswordFormControl('', 'newPassword', 'Новый пароль',
        [Validators.required,
          Validators.pattern('(?=^.{6,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$')]),

      confirmNewPassword: new ChangePasswordFormControl('', 'confirmNewPassword',
        'Подтверждение нового пароля', Validators.required)
    });

    this.setValidators(ConfirmPasswordValidator.passwordValidate('newPassword',
      'confirmNewPassword'));
  }
}
