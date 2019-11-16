import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Guid} from 'guid-typescript';
import {Place} from '../dbModel/place.model';
import {MAIN_PART_URL} from './url.model';

const API_PLACE = 'place';

@Injectable()
export class PlaceRepository {
  constructor(private http: HttpClient) { }

  getAllPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(`${MAIN_PART_URL}/${API_PLACE}`);
  }

  getPlace(id: Guid): Observable<Place> {
    return this.http.get<Place>(`${MAIN_PART_URL}/${API_PLACE}/${id}`);
  }
  // TODO: добавить остальные методы.
}
