import {Component, Input} from '@angular/core';
import {BaseFormGroup} from '../../form/base.form-group';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html'
})
export class FormErrorComponent {

  // Обязательный инпут.
  @Input()
  form: BaseFormGroup;

  // Обязательный инпут.
  @Input()
  submitted: boolean;
}
