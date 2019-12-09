import {AbstractControl, ValidationErrors} from '@angular/forms';

export class OnlyDigitsValidator {
  public static ValidateNumber() {
    return (control: AbstractControl): ValidationErrors | null =>
      isNaN(parseFloat(control.value)) ? {isNaN: true} : null;
  }
}
