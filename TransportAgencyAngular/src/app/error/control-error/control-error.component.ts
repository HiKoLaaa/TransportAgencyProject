import {Component, Input} from '@angular/core';
import {CustomBaseFormControl} from '../../form/custom-base.form-control';

@Component({
  selector: 'app-control-error',
  templateUrl: './control-error.component.html'
})
export class ControlErrorComponent {

  // Обязательный инпут.
  @Input()
  control: CustomBaseFormControl;

  // Обязательный инпут.
  @Input()
  submitted: boolean;
}
