import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PlaceRepository} from '../../model/repository/placeRepository.model';
import {Place} from '../../model/dbModel/place.model';

@Injectable({
  providedIn: 'root'
})
export class ResolvePlaceInfoGuard implements Resolve<Place[]> {
  constructor(private placeRepository: PlaceRepository) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      Observable<Place[]> | Promise<Place[]> | Place[] {
    return this.placeRepository.getAllPlaces();
  }
}
