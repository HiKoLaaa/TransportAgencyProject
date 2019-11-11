import {NgModule} from '@angular/core';
import {TransportTypeRepository} from './repository/transportTypeRepository.model';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    TransportTypeRepository
  ]
})
export class ModelModule { }
