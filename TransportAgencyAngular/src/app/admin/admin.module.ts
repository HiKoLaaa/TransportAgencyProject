import {NgModule} from '@angular/core';
import {AdminMainPageComponent} from './admin-main-page/admin-main-page.component';
import {routing} from './admin-route/route.routing';
import {CommonModule} from '@angular/common';
import { TripAdministrationComponent } from './administration/trip-administration/trip-administration.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';


@NgModule({
  imports: [CommonModule, routing],
  declarations: [AdminMainPageComponent, TripAdministrationComponent, AdminMenuComponent],
  exports: [AdminMainPageComponent]
})
export class AdminModule { }
