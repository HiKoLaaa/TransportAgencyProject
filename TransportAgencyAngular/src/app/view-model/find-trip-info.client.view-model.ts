import {Injectable, InjectionToken} from '@angular/core';
import {Place} from '../model/dbModel/place.model';
import {TransportType} from '../model/dbModel/transportType.model';

export const FIND_INFO = new InjectionToken('find_info');

@Injectable()
export class FindTripInfoClientViewModel {
  arrivalPlace: Place;
  arrivalDate?: Date;
  departurePlace: Place;
  departureDate: Date;
  transportType: TransportType;
}
