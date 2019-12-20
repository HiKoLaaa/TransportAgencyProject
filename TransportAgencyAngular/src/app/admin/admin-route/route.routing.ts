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
import {PlaceAdministrationComponent} from '../administration/place-administration/place-administration.component';
import {ResolvePlaceInfoGuard} from '../../guard/resolve-place-info/resolve-place-info.guard';
import {PlaceFormComponent} from '../administration/place-administration/place-form/place-form.component';
import {CountryAdministrationComponent} from '../administration/country-administration/country-administration.component';
import {ResolveCountryInfoGuard} from '../../guard/resolve-country-info/resolve-country-info.guard';
import {CountryFormComponent} from '../administration/country-administration/country-form/country-form.component';

const childrenRoutes: Routes = [
  {path: '', component: AdminMenuComponent},
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
  },
  {
    path: 'places',
    component: PlaceAdministrationComponent,
    resolve: {ResolvePlaceInfoGuard}
  },
  {
    path: 'places/form/:mode',
    component: PlaceFormComponent
  },
  {
    path: 'countries',
    component: CountryAdministrationComponent,
    resolve: {ResolveCountryInfoGuard}
  },
  {
    path: 'countries/form/:mode',
    component: CountryFormComponent
  }
];

export const routing = RouterModule.forChild([
  {
    path: '',
    component: AdminMainPageComponent,
    children: childrenRoutes
  }
]);
