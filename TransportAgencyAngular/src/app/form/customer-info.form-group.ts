import {FormGroup, Validators} from '@angular/forms';
import {CustomFormControl} from './custom.form-control';

export class CustomerInfoFormGroup extends FormGroup {
  constructor() {
    super({
      firstName: new CustomFormControl('', 'firstName', 'Имя', Validators.required),
      secondName: new CustomFormControl('', 'secondName', 'Фамилия', Validators.required),
      number: new CustomFormControl('', 'number', 'Номер телефона', Validators.required)
    });
  }

  get customerAllControls(): CustomFormControl[] {
    return Object.keys(this.controls)
      .map(k => this.controls[k] as CustomFormControl);
  }

  getFormErrors(): string[] {
    let messages: string[] = [];
    this.customerAllControls.forEach(c => c.getErrors()
      .forEach(m => messages.push(m)));

    return messages;
  }
}
