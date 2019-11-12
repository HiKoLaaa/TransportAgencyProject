import {FormControl} from '@angular/forms';

export class FindFormFormControl extends FormControl {
  name: string;
  label: string;

  constructor(state: string, name: string, label: string, validator: any) {
    super(state, validator);
    this.name = name;
    this.label = label;
  }
}
