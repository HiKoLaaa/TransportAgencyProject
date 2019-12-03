import {FormGroup} from '@angular/forms';
import {CustomBaseFormControl} from './custom-base.form-control';

export class BaseFormGroup extends FormGroup {
  constructor(props) {
    super(props);
  }

  get AllControls(): CustomBaseFormControl[] {
    return Object.keys(this.controls)
      .map(k => this.controls[k] as CustomBaseFormControl);
  }

  getFormErrors(): string[] {
    const messages: string[] = [];
    this.AllControls.forEach(c => c.getErrors()
      .forEach(m => messages.push(m)));

    return messages;
  }
}
