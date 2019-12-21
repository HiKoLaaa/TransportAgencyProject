import {Component, Input} from '@angular/core';
import {Location} from '@angular/common';
import {BaseFormGroup} from '../../../../form/base.form-group';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html'
})
export class FormButtonComponent {
  constructor(private location: Location) {
  }

  // Обязательный инпут.
  @Input()
  form: BaseFormGroup;

  // Обязательный инпут.
  @Input()
  mode: string;

  // Обязательный инпут.
  @Input()
  submitted: boolean;

  // Обязательный инпут, являющиеся функцией.
  @Input()
  action: any;

  private submitForm(): void {
    this.action();
  }
}
