import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TransportType} from '../../model/dbModel/transportType.model';
import {PlaceRepository} from '../../model/repository/placeRepository.model';

@Injectable({
  providedIn: 'root'
})
export class ResolvePlaceInfoGuard implements Resolve<TransportType[]> {
  constructor(private placeRepository: PlaceRepository) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      Observable<TransportType[]> | Promise<TransportType[]> | TransportType[] {
    return this.placeRepository.getAllPlaces();
  }
}
