import {AbstractControl, ValidationErrors, Validator} from '@angular/forms';
import {TransportType} from '../model/dbModel/transportType.model';

export class AvailableTransportTypeValidator implements Validator {
  transportTypes: TransportType[];

  constructor(transportTypes: TransportType[]) {
    this.transportTypes = transportTypes;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.transportTypes.find(tt =>
      tt.name === control.value) ? null : {notMatch: true};
  }
}
