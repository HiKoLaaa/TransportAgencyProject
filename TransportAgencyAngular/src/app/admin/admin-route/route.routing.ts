import {RouterModule, Routes} from '@angular/router';
import {TripAdministrationComponent} from '../administration/trip-administration/trip-administration.component';
import {AdminMainPageComponent} from '../admin-main-page/admin-main-page.component';
import {AdminMenuComponent} from '../admin-menu/admin-menu.component';

import {TripFormComponent} from '../administration/trip-administration/trip-form/trip-form.component';
import {TripShowComponent} from '../administration/trip-administration/trip-show/trip-show.component';
import {
  TransportTypeAdministrationComponent
} from '../administration/transport-type-administration/transport-type-administration.component';

import {
  TransportTypeFormComponent
} from '../administration/transport-type-administration/transport-type-form/transport-type-form.component';
import {ResolveTransportTypeInfoGuard} from '../../guard/resolve-transport-type-info/resolve-transport-type-info.guard';
import {ResolveTripInfoGuard} from '../../guard/resolve-trip-info/resolve-trip-info.guard';
import {AdminCommonComponent} from '../administration/admin-common/admin-common.component';

const childrenRoutes: Routes = [
  {path: '', component: AdminMenuComponent},
  {path: 'manage',
   component: AdminCommonComponent,
   children: [
     {
       path: 'trips',
       component: TripAdministrationComponent,
       resolve: {ResolveTripInfoGuard}
     },
     {
       path: 'trips/form/:mode',
       component: TripFormComponent
     },
     {
       path: 'trips/show',
       component: TripShowComponent
     },
     {
       path: 'transport_types',
       component: TransportTypeAdministrationComponent,
       resolve: {ResolveTransportTypeInfoGuard}
     },
     {
       path: 'transport_types/form/:mode',
       component: TransportTypeFormComponent
     }
   ]}
  // TODO: добавить марштуры.
];

export const routing = RouterModule.forChild([
  {
    path: '',
    component: AdminMainPageComponent,
    children: childrenRoutes
  }
]);
