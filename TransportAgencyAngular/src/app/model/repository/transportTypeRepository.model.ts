import {HttpClient} from '@angular/common/http';
import {TransportType} from '../dbModel/transportType.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Guid} from 'guid-typescript';
import {MAIN_PART_URL} from './url.model';

const API_TRANSPORT_TYPE = 'transporttype';

@Injectable()
export class TransportTypeRepository {
  constructor(private http: HttpClient) { }

  getAllTypes(): Observable<TransportType[]> {
    return this.http.get<TransportType[]>(`${MAIN_PART_URL}/${API_TRANSPORT_TYPE}`);
  }

  getType(id: Guid): Observable<TransportType> {
    return this.http.get<TransportType>(`${MAIN_PART_URL}/${API_TRANSPORT_TYPE}/${id}`);
  }

  addType(tranType: TransportType): Observable<TransportType> {
    tranType.id = Guid.create();
    return this.http.post<TransportType>(`${MAIN_PART_URL}/${API_TRANSPORT_TYPE}`, this.prepareToSave(tranType));
  }

  editType(tranType: TransportType): Observable<TransportType> {
    return this.http.put<TransportType>(`${MAIN_PART_URL}/${API_TRANSPORT_TYPE}`, this.prepareToSave(tranType));
  }

  deleteType(id: Guid): Observable<TransportType> {
    return this.http.delete<TransportType>(`${MAIN_PART_URL}/${API_TRANSPORT_TYPE}/${id}`);
  }

  private prepareToSave(tranType: TransportType): object {
    const body = {
      id: tranType.id.toString(),
      name: tranType.name
    };

    return body;
  }
}
