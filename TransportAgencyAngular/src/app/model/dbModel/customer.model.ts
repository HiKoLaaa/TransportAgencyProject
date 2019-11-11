import {Guid} from 'guid-typescript';
import {Trip} from './trip.model';

export class Customer {
  id: Guid;
  firstName: string;
  secondName: string;
  number: string;
  trip: Trip;
}
