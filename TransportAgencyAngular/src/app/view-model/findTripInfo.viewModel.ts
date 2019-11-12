import {Guid} from 'guid-typescript';
import {InjectionToken} from '@angular/core';

export const FIND_INFO = new InjectionToken('find_info');
export class FindTripInfoViewModel {
  arrivalId: Guid;
  arrivalDate?: Date;
  departureId: Guid;
  departureDate: Date;
  transportTimeId: Guid;
}
