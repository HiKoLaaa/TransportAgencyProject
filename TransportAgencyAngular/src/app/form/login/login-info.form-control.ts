import {CustomBaseFormControl} from '../custom-base.form-control';

export class LoginInfoFormControl extends CustomBaseFormControl {
  getErrors(): string[] {
    let messages: string[] = super.getErrors();
    if (this.errors) {
      for (let errorName in this.errors) {
        switch (errorName) {
          case 'notFound':
            messages.push(`Выберите точное место из списка "${this.label}"`);
            break;
        }
      }
    }

    return messages;
  }
}
