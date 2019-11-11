import {HttpClient} from '@angular/common/http';
import {TransportType} from '../dbModel/transportType.model';
import {Injectable} from '@angular/core';

const URL = 'https://localhost:44386/api/transporttype';

@Injectable()
export class TransportTypeRepository {
  transportTypes: TransportType[];

  constructor(private http: HttpClient) {
    http.get<TransportType[]>(URL)
      .subscribe(ans => {
        this.transportTypes = ans;
      });
  }

  get allTypes(): TransportType[] {
    return this.transportTypes;
  }
}
