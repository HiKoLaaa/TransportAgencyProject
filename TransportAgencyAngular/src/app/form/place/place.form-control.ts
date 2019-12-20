import {CustomBaseFormControl} from '../custom-base.form-control';

export class PlaceFormControl extends CustomBaseFormControl {
  getErrors(): string[] {
    let messages: string[] = super.getErrors();
    if (this.errors) {
      for (let errorName in this.errors) {
        switch (errorName) {
          case 'notMatch':
            messages.push(`В поле "${this.label}" нет совпадений, выберите не пустое`);
            break;
        }
      }
    }

    return messages;
  }
}
