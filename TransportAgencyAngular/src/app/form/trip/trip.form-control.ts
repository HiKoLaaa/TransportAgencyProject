import {CustomBaseFormControl} from '../custom-base.form-control';

export class TripFormControl extends CustomBaseFormControl {
  getErrors(): string[] {
    let messages: string[] = super.getErrors();
    if (this.errors) {
      for (let errorName in this.errors) {
        switch (errorName) {
          case 'notFound':
            messages.push(`Выберите точное место из списка "${this.label}"`);
            break;
          case 'min':
            messages.push(`Поле "${this.label}" должно иметь значение больше или равно ${this.errors['min'].min}`);
            break;
          case 'isNaN':
            messages.push(`В поле "${this.label}" должно указываться число`);
            break;
          case 'notMatch':
            messages.push(`В поле "${this.label}" нет совпадений, выберите не пустое`);
            break;
        }
      }
    }

    return messages;
  }
}
