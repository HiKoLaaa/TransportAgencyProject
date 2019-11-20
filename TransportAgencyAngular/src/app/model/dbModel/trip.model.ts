import {Guid} from 'guid-typescript';
import {TransportType} from './transportType.model';
import {Place} from './place.model';

export class Trip {
  id: Guid;
  transportType: TransportType;
  departurePlace: Place;
  arrivalPlace: Place;
  departureTime: Date;
  arrivalTime: Date;
  price: number;
  availableTickets: number;
  saleTickets: number;
}
