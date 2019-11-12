import {RouterModule} from '@angular/router';
import {FindTripComponent} from '../core/find-trip/find-trip.component';

const routes = [
  {path: 'find', component: FindTripComponent},
  {path: '', redirectTo: '/find', pathMatch: 'full'}
  ];

export const routing = RouterModule.forRoot(routes);
