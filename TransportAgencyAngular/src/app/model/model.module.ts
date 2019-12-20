import {NgModule} from '@angular/core';
import {TransportTypeRepository} from './repository/transportTypeRepository.model';
import {HttpClientModule} from '@angular/common/http';
import {PlaceRepository} from './repository/placeRepository.model';
import {TripRepository} from './repository/tripRepository.model';
import {CustomerRepository} from './repository/customerRepository';
import {AccountRepository} from './repository/accountRepository.model';
import {CountryRepository} from './repository/countryRepository.model';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    TransportTypeRepository,
    PlaceRepository,
    TripRepository,
    CustomerRepository,
    AccountRepository,
    CountryRepository
  ]
})
export class ModelModule { }
