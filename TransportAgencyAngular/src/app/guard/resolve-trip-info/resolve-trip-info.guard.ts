import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Trip} from '../../model/dbModel/trip.model';
import {TripRepository} from '../../model/repository/tripRepository.model';

@Injectable({
  providedIn: 'root'
})
export class ResolveTripInfoGuard implements Resolve<Trip[]> {
  constructor(private tripRepository: TripRepository) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Trip[]> | Promise<Trip[]> | Trip[] {
    return this.tripRepository.getAllTrips();
  }
}
