import {CustomBaseFormControl} from '../custom-base.form-control';

export class CustomerInfoFormControl extends CustomBaseFormControl {
  getErrors(): string[] {
    let messages: string[] = super.getErrors();
    return messages;
  }
}
