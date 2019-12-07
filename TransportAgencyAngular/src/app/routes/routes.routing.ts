import {RouterModule} from '@angular/router';
import {FindTripComponent} from '../core/find-trip/find-trip.component';
import {TripInfoComponent} from '../core/trip-info/trip-info.component';
import {CustomerInfoComponent} from '../core/customer-info/customer-info.component';
import {ThanksMessageComponent} from '../core/thanks-message/thanks-message.component';
import {ResolveTripInfoGuard} from '../guard/resolve-trip-info/resolve-trip-info.guard';
import {CanActivateOnlyMainPageGuard} from '../guard/can-activate-all-but-main-page/can-activate-only-main-page-guard.service';
import {RegistrationComponent} from '../core/registration/registration.component';

const routes = [
  {
    path: 'find',
    component: FindTripComponent,
    canActivate: [CanActivateOnlyMainPageGuard]
  },
  {
    path: 'trips',
    component: TripInfoComponent,
    resolve: {tripResolve: ResolveTripInfoGuard},
    canActivate: [CanActivateOnlyMainPageGuard]
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    canActivate: [CanActivateOnlyMainPageGuard]
  },
  {path: 'new_order', component: CustomerInfoComponent, canActivate: [CanActivateOnlyMainPageGuard]},
  {path: 'thanks', component: ThanksMessageComponent, canActivate: [CanActivateOnlyMainPageGuard]},
  {path: '', redirectTo: '/find', pathMatch: 'full'},
  {
    path: 'admin_panel',
    loadChildren: '../app/admin/admin.module#AdminModule',
    canActivate: [CanActivateOnlyMainPageGuard]
  }
];

export const routing = RouterModule.forRoot(routes);
