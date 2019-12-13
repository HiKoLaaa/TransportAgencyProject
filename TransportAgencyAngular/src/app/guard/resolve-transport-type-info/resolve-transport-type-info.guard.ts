import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TransportType} from '../../model/dbModel/transportType.model';
import {TransportTypeRepository} from '../../model/repository/transportTypeRepository.model';

@Injectable({
  providedIn: 'root'
})
export class ResolveTransportTypeInfoGuard implements Resolve<TransportType[]> {
  constructor(private transportTypeRepository: TransportTypeRepository) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      Observable<TransportType[]> | Promise<TransportType[]> | TransportType[] {
    return this.transportTypeRepository.getAllTypes();
  }
}
