import {RouterModule} from '@angular/router';
import {FindTripComponent} from '../core/find-trip/find-trip.component';
import {TripInfoComponent} from '../core/trip-info/trip-info.component';

const routes = [
  {path: 'find', component: FindTripComponent},
  {path: 'trips', component: TripInfoComponent},
  {path: '', redirectTo: '/find', pathMatch: 'full'}
  ];

export const routing = RouterModule.forRoot(routes);
