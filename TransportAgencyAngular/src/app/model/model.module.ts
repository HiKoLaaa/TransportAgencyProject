import {NgModule} from '@angular/core';
import {TransportTypeRepository} from './repository/transportTypeRepository.model';
import {HttpClientModule} from '@angular/common/http';
import {PlaceRepository} from './repository/placeRepository.model';
import {TripRepository} from './repository/tripRepository.model';
import {CustomerRepository} from './repository/customerRepository';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    TransportTypeRepository,
    PlaceRepository,
    TripRepository,
    CustomerRepository
  ]
})
export class ModelModule { }
