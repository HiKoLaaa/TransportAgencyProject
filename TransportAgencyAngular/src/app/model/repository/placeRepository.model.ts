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

  addPlace(place: Place): Observable<Place> {
    place.id = Guid.create();
    return this.http.post<Place>(`${MAIN_PART_URL}/${API_PLACE}`, this.prepareToSave(place));
  }

  editPlace(place: Place): Observable<Place> {
    return this.http.put<Place>(`${MAIN_PART_URL}/${API_PLACE}`, this.prepareToSave(place));
  }

  deletePlace(id: Guid): Observable<Place> {
    return this.http.delete<Place>(`${MAIN_PART_URL}/${API_PLACE}/${id}`);
  }

  private prepareToSave(place: Place): object {
    const body = {
      id: place.id,
      name: place.name,
      country: place.country
    };

    return body;
  }
}
