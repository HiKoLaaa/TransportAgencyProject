import {FormGroup} from '@angular/forms';

export class ConfirmPasswordValidator {

  public static passwordValidate(controlName: string, matchingControlName: string) {
    return (form: FormGroup): { [s: string]: boolean } => {
      const passControl = form.get(controlName);
      const confirmPassControl = form.get(matchingControlName);
      if (passControl.errors && confirmPassControl.errors) {
        return;
      }
      confirmPassControl.setErrors({passwordMismatch: true});

      if (passControl.value !== confirmPassControl.value) {
        confirmPassControl.setErrors({passwordMismatch: true});
      } else {
        confirmPassControl.setErrors(null);
      }
    };
  }
}
