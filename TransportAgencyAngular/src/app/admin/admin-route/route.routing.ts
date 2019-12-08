import {RouterModule} from '@angular/router';
import {TripAdministrationComponent} from '../administration/trip-administration/trip-administration.component';
import {AdminMainPageComponent} from '../admin-main-page/admin-main-page.component';
import {AdminMenuComponent} from '../admin-menu/admin-menu.component';

const childrenRoutes = [
  {path: '', component: AdminMenuComponent},
  {path: 'trips', component: TripAdministrationComponent}
  // TODO: добавить марштуры.
];

export const routing = RouterModule.forChild([
  {
    path: '',
    component: AdminMainPageComponent,
    children: childrenRoutes
  }
]);
