import {CustomBaseFormControl} from '../custom-base.form-control';

export class ChangePasswordFormControl extends CustomBaseFormControl {
  getErrors(): string[] {
    let messages: string[] = super.getErrors();
    if (this.errors) {
      for (let errorName in this.errors) {
        switch (errorName) {
          case 'pattern':
            messages.push(`Поле "${this.label}" должно состоять из цифр, букв (заглавных и строчных)
                длиной не менее 6 символов`);
            break;
          case 'passwordMismatch':
            messages.push(`Поле "${this.label}" не совпадает с введённым раннее паролем`);
            break;
        }
      }
    }

    return messages;
  }
}
