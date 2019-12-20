import {BaseFormGroup} from '../base.form-group';
import {Validators} from '@angular/forms';
import {PlaceFormControl} from './place.form-control';

export class PlaceFormGroup extends BaseFormGroup {
  constructor() {
    super({
      name: new PlaceFormControl('', 'name', 'Наименование', [Validators.required]),
      country: new PlaceFormControl('', 'country', 'Страна', null)
    });
  }
}
