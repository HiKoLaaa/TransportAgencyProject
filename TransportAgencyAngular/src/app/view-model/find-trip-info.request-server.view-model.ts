import {Guid} from 'guid-typescript';

export class FindTripInfoRequestServerViewModel {
  arrivalId: Guid;
  arrivalDate?: Date;
  departureId: Guid;
  departureDate: Date;
  transportKindId: Guid;
}
