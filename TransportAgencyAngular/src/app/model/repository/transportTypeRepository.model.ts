import {HttpClient} from '@angular/common/http';
import {TransportType} from '../dbModel/transportType.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Guid} from 'guid-typescript';
import {MAIN_PART_URL} from './url.model';

const API_TRANPORT_TYPE = 'transporttype';

@Injectable()
export class TransportTypeRepository {
  constructor(private http: HttpClient) { }

  getAllTypes(): Observable<TransportType[]> {
    return this.http.get<TransportType[]>(`${MAIN_PART_URL}/${API_TRANPORT_TYPE}`);
  }

  getType(id: Guid): Observable<TransportType> {
    return this.http.get<TransportType>(`${MAIN_PART_URL}/${API_TRANPORT_TYPE}/${id}`);
  }

  // TODO: добавить остальные методы.
}
