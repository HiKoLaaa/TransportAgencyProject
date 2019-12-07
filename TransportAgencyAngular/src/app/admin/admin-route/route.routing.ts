import {RouterModule} from '@angular/router';
import {AdminMainPageComponent} from '../admin-main-page/admin-main-page.component';

export const routing = RouterModule.forChild([
  { path: '', component: AdminMainPageComponent }
]);
