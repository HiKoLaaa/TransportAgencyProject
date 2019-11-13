import {NgModule} from '@angular/core';
import {TransportTypeRepository} from './repository/transportTypeRepository.model';
import {HttpClientModule} from '@angular/common/http';
import {PlaceRepository} from './repository/placeRepository.model';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    TransportTypeRepository,
    PlaceRepository
  ]
})
export class ModelModule { }
