import {FormControl} from '@angular/forms';

export class FindFormFormControl extends FormControl {
  public name: string;
  public label: string;

  constructor(state: string, name: string, label: string, validator: any) {
    super(state, validator);
    this.name = name;
    this.label = label;
  }

  getErrors(): string[] {
    let messages: string[] = [];
    if (this.errors) {
      for (let errorName in this.errors) {
        switch (errorName) {
          case 'required':
            messages.push(`Поле "${this.label}" должно быть заполнено`);
            break;
        }
      }
    }

    return messages;
  }
}
