import {CustomBaseFormControl} from '../custom-base.form-control';

export class RegistrationFormControl extends CustomBaseFormControl {
  getErrors(): string[] {
    let messages: string[] = super.getErrors();
    if (this.errors) {
      for (let errorName in this.errors) {
        switch (errorName) {
          case 'pattern':
            if (this.name === 'password') {
              messages.push(`Поле "${this.label}" должно состоять из цифр, букв (заглавных и строчных)
                длиной не менее 6 символов`);
            }
            if (this.name === 'login') {
              messages.push(`Поле "${this.label}" должно состоять из латинских букв и цифр длинной 2-20 символов,
                начиная с буквы`);
            }
            break;
          case 'passwordMismatch':
            messages.push(`Поле ${this.label} не совпадает с введённым раннее паролем`);
            break;
        }
      }
    }

    return messages;
  }
}
