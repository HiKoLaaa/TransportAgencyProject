import {FormGroup} from '@angular/forms';
import {CustomFormControl} from './custom.form-control';

export class BaseFormGroup extends FormGroup {
  constructor(props) {
    super(props);
  }

  get AllControls(): CustomFormControl[] {
    return Object.keys(this.controls)
      .map(k => this.controls[k] as CustomFormControl);
  }

  getFormErrors(): string[] {
    const messages: string[] = [];
    this.AllControls.forEach(c => c.getErrors()
      .forEach(m => messages.push(m)));

    return messages;
  }
}
