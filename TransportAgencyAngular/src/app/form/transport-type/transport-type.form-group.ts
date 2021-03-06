import {BaseFormGroup} from '../base.form-group';
import {CustomBaseFormControl} from '../custom-base.form-control';
import {Validators} from '@angular/forms';

export class TransportTypeFormGroup extends BaseFormGroup {
  constructor() {
    super({
      name: new CustomBaseFormControl('', 'name', 'Наименование', [Validators.required])
    });
  }
}
