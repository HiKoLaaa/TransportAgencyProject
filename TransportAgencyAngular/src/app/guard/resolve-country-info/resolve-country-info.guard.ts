import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {Country} from '../../model/dbModel/country.model';
import {CountryRepository} from '../../model/repository/countryRepository.model';

@Injectable()
export class ResolveCountryInfoGuard implements Resolve<Country[]> {
  constructor(private countryRepository: CountryRepository) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Country[]> | Promise<Country[]> | Country[] {
    return this.countryRepository.getAllCountries();
  }
}
