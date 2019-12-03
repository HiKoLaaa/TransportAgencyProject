import {FormControl} from '@angular/forms';

export class CustomFormControl extends FormControl {
  public name: string;
  public label: string;

  constructor(state: string, name: string, label: string, validator: any) {
    super(state, validator);
    this.name = name;
    this.label = label;
  }

  // TODO: refactor this.
  getErrors(): string[] {
    let messages: string[] = [];
    if (this.errors) {
      for (let errorName in this.errors) {
        console.log(errorName);
        switch (errorName) {
          case 'required':
            messages.push(`Поле "${this.label}" должно быть заполнено`);
            break;
          case 'pattern':
            if (this.name === 'password') {
              messages.push(`Поле "${this.label}" должно состоять из цифр, букв (заглавных и строчных)
                длиной не менее 6 символов`);
            }
            break;
          case 'notFound':
            messages.push(`Выберите точное место из списка "${this.label}"`);
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
