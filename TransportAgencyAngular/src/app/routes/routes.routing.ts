import {RouterModule} from '@angular/router';
import {FindTripComponent} from '../core/find-trip/find-trip.component';
import {TripInfoComponent} from '../core/trip-info/trip-info.component';
import {CustomerInfoComponent} from '../core/customer-info/customer-info.component';
import {ThanksMessageComponent} from '../core/thanks-message/thanks-message.component';
import {ResolveTripInfoGuard} from '../guard/resolve-trip-info/resolve-trip-info.guard';
import {PagesCanActivateGuard} from '../guard/can-activate-all-but-main-page/pages-can-activate.guard';

const routes = [
  {path: 'find', component: FindTripComponent},
  {
    path: 'trips',
    component: TripInfoComponent,
    resolve: {tripResolve: ResolveTripInfoGuard},
    canActivate: [PagesCanActivateGuard]
  },
  {path: 'new_order', component: CustomerInfoComponent, canActivate: [PagesCanActivateGuard]},
  {path: 'thanks', component: ThanksMessageComponent, canActivate: [PagesCanActivateGuard]},
  {path: '', redirectTo: '/find', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes);
