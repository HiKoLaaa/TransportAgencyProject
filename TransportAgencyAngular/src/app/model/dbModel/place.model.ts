import {Guid} from 'guid-typescript';
import {Country} from './country.model';

export class Place {
  id: Guid;
  name: string;
  country: Country;
}
