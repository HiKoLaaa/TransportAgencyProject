import {NgModule} from '@angular/core';
import {AdminMainPageComponent} from './admin-main-page/admin-main-page.component';
import {routing} from './admin-route/route.routing';
import {CommonModule} from '@angular/common';
import { TripAdministrationComponent } from './administration/trip-administration/trip-administration.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { TripFormComponent } from './administration/trip-administration/trip-form/trip-form.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [AutocompleteLibModule, ReactiveFormsModule, CommonModule, routing],
  declarations: [AdminMainPageComponent, TripAdministrationComponent, AdminMenuComponent, TripFormComponent],
  providers: [],
  exports: [AdminMainPageComponent]
})
export class AdminModule { }
