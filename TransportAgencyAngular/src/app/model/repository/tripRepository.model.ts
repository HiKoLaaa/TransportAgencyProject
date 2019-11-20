import {FindTripInfoRequestServerViewModel} from '../../view-model/find-trip-info.request-server.view-model';
import {Observable} from 'rxjs';
import {MAIN_PART_URL} from './url.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Guid} from 'guid-typescript';
import {Trip} from '../dbModel/trip.model';\

const API_TRIP = 'trip';

@Injectable()
export class TripRepository {
  constructor(private http: HttpClient) {
  }

  getAllTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${MAIN_PART_URL}/${API_TRIP}`);
  }

  getTrip(id: Guid): Observable<Trip> {
    return this.http.get<Trip>(`${MAIN_PART_URL}/${API_TRIP}/${id}`);
  }

  getSuitableTrips(info: FindTripInfoRequestServerViewModel): Observable<Trip[]> {
    const tt = () => {
      if (info.transportTypeId === undefined) {
        return '';
      } else {
        return info.transportTypeId.toString();
      }
    };

    const paramets = new HttpParams({
      fromObject: {
        arrivalId: info.arrivalId.toString(),
        departureId: info.departureId.toString(),
        transportTypeId: tt(),
        arrivalDate: info.arrivalDate.toString(),
        departureDate: info.departureDate.toString()
      }
    });

    return this.http.get<Trip[]>(`${MAIN_PART_URL}/${API_TRIP}/sort`, {
      params: paramets
    });
  }

  editTrip(editTrip: Trip): Observable<Trip> {
    return this.http.put<Trip>(`${MAIN_PART_URL}/${API_TRIP}`, this.prepareToSave(editTrip));
  }

  addTrip(trip: Trip): Observable<Trip> {
    trip.id = Guid.create();
    return this.http.post<Trip>(`${MAIN_PART_URL}/${API_TRIP}`, this.prepareToSave(trip));
  }

  deleteTrip(id: Guid): Observable<Trip> {
    return this.http.delete<Trip>(`${MAIN_PART_URL}/${API_TRIP}/${id}`);
  }

  private prepareToSave(trip: Trip): object {
    const body = {
      id: trip.id,
      transportType: trip.transportType,
      departurePlace: trip.departurePlace,
      arrivalPlace: trip.arrivalPlace,
      departureTime: trip.departureTime,
      arrivalTime: trip.arrivalTime,
      price: trip.price,
      availableTickets: trip.availableTickets,
      saleTickets: trip.saleTickets
    };

    return body;
  }
}
