import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Place} from '../dbModel/place.model';
import {MAIN_PART_URL} from './url.model';
import {Guid} from 'guid-typescript';
import {Country} from '../dbModel/country.model';

const API_COUNTRY = 'country';

@Injectable()
export class CountryRepository {
  constructor(private http: HttpClient) {

  }

  getAllCountries(): Observable<Place[]> {
    return this.http.get<Place[]>(`${MAIN_PART_URL}/${API_COUNTRY}`);
  }

  getCountry(id: Guid): Observable<Place> {
    return this.http.get<Place>(`${MAIN_PART_URL}/${API_COUNTRY}/${id}`);
  }

  addCountry(place: Place): Observable<Place> {
    place.id = Guid.create();
    return this.http.post<Place>(`${MAIN_PART_URL}/${API_COUNTRY}`, this.prepareToSave(place));
  }

  editCountry(place: Place): Observable<Place> {
    return this.http.put<Place>(`${MAIN_PART_URL}/${API_COUNTRY}`, this.prepareToSave(place));
  }

  deleteCountry(id: Guid): Observable<Place> {
    return this.http.delete<Place>(`${MAIN_PART_URL}/${API_COUNTRY}/${id}`);
  }

  private prepareToSave(country: Country): object {
    const body = {
      id: country.id.toString(),
      name: country.name,
    };

    return body;
  }
}
