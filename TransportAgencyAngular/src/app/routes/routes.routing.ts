import {RouterModule} from '@angular/router';
import {FindTripComponent} from '../core/find-trip/find-trip.component';
import {TripInfoComponent} from '../core/trip-info/trip-info.component';
import {CustomerInfoComponent} from '../core/customer-info/customer-info.component';
import {ThanksMessageComponent} from '../core/thanks-message/thanks-message.component';

const routes = [
  {path: 'find', component: FindTripComponent},
  {path: 'trips', component: TripInfoComponent},
  {path: 'new_order', component: CustomerInfoComponent},
  {path: 'thanks', component: ThanksMessageComponent},
  {path: '', redirectTo: '/find', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes);
