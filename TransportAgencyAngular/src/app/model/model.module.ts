import {NgModule} from '@angular/core';
import {TransportTypeRepository} from './repository/transportTypeRepository.model';
import {HttpClientModule} from '@angular/common/http';
import {PlaceRepository} from './repository/placeRepository.model';
import {TripRepository} from './repository/tripRepository.model';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    TransportTypeRepository,
    PlaceRepository,
    TripRepository
  ]
})
export class ModelModule { }
