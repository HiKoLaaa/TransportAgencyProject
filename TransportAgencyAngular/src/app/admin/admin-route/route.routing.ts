import {RouterModule, Routes} from '@angular/router';
import {TripAdministrationComponent} from '../administration/trip-administration/trip-administration.component';
import {AdminMainPageComponent} from '../admin-main-page/admin-main-page.component';
import {AdminMenuComponent} from '../admin-menu/admin-menu.component';
import {ResolveTripInfoGuard} from '../../guard/resolve-trip-info/resolve-trip-info.guard';
import {TripFormComponent} from '../administration/trip-administration/trip-form/trip-form.component';

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
  }
  // TODO: добавить марштуры.
];

export const routing = RouterModule.forChild([
  {
    path: '',
    component: AdminMainPageComponent,
    children: childrenRoutes
  }
]);
