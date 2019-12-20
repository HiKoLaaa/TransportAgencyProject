import {NgModule} from '@angular/core';
import {AdminMainPageComponent} from './admin-main-page/admin-main-page.component';
import {routing} from './admin-route/route.routing';
import {CommonModule} from '@angular/common';
import {TripAdministrationComponent} from './administration/trip-administration/trip-administration.component';
import {AdminMenuComponent} from './admin-menu/admin-menu.component';
import {TripFormComponent} from './administration/trip-administration/trip-form/trip-form.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {ReactiveFormsModule} from '@angular/forms';
import {TripShowComponent} from './administration/trip-administration/trip-show/trip-show.component';
import {TransportTypeAdministrationComponent} from './administration/transport-type-administration/transport-type-administration.component';
import {TransportTypeFormComponent} from './administration/transport-type-administration/transport-type-form/transport-type-form.component';
import { ItemButtonComponent } from './administration/bottom-button/item-button/item-button.component';
import {PlaceAdministrationComponent} from './administration/place-administration/place-administration.component';
import { PlaceFormComponent } from './administration/place-administration/place-form/place-form.component';
import { CountryAdministrationComponent } from './administration/country-administration/country-administration.component';
import { CountryFormComponent } from './administration/country-administration/country-form/country-form.component';


@NgModule({
  imports: [AutocompleteLibModule, ReactiveFormsModule, CommonModule, routing],
  declarations: [
    AdminMainPageComponent, TripAdministrationComponent, AdminMenuComponent, TripFormComponent,
    TripShowComponent, TransportTypeAdministrationComponent, TransportTypeFormComponent, ItemButtonComponent,
    PlaceAdministrationComponent,
    PlaceFormComponent,
    CountryAdministrationComponent,
    CountryFormComponent
    ],
  providers: [],
  exports: [AdminMainPageComponent]
})
export class AdminModule {
}
