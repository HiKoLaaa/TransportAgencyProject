import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MAIN_PART_URL} from './url.model';
import {Guid} from 'guid-typescript';
import {Country} from '../dbModel/country.model';

const API_COUNTRY = 'country';

@Injectable()
export class CountryRepository {
  constructor(private http: HttpClient) {

  }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${MAIN_PART_URL}/${API_COUNTRY}`);
  }

  getCountry(id: Guid): Observable<Country> {
    return this.http.get<Country>(`${MAIN_PART_URL}/${API_COUNTRY}/${id}`);
  }

  addCountry(country: Country): Observable<Country> {
    country.id = Guid.create();
    return this.http.post<Country>(`${MAIN_PART_URL}/${API_COUNTRY}`, this.prepareToSave(country));
  }

  editCountry(country: Country): Observable<Country> {
    return this.http.put<Country>(`${MAIN_PART_URL}/${API_COUNTRY}`, this.prepareToSave(country));
  }

  deleteCountry(id: Guid): Observable<Country> {
    return this.http.delete<Country>(`${MAIN_PART_URL}/${API_COUNTRY}/${id}`);
  }

  private prepareToSave(country: Country): object {
    const body = {
      id: country.id.toString(),
      name: country.name,
    };

    return body;
  }
}
