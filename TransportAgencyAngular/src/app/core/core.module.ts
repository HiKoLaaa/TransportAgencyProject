import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {FindTripComponent} from './find-trip/find-trip.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {TripInfoComponent} from './trip-info/trip-info.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {DirectiveModule} from './directives/directive.module';
import {FIND_INFO, FindTripInfoClientViewModel} from '../view-model/find-trip-info.client.view-model';
import {CustomerInfoComponent} from './customer-info/customer-info.component';
import {ThanksMessageComponent} from './thanks-message/thanks-message.component';
import {LoginComponent} from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {CommonErrorModule} from '../error/common-error.module';

@NgModule({
  imports: [
    BrowserModule, RouterModule, FormsModule, ReactiveFormsModule,
    AutocompleteLibModule, DirectiveModule, CommonErrorModule
  ],
  declarations: [HeaderComponent, FooterComponent, FindTripComponent,
    TripInfoComponent, CustomerInfoComponent, ThanksMessageComponent, LoginComponent, RegistrationComponent],
  providers: [
    {
      provide: FIND_INFO, useValue: new BehaviorSubject<FindTripInfoClientViewModel>(new FindTripInfoClientViewModel())
    }
  ],
  exports: [HeaderComponent, FooterComponent, FindTripComponent]
})
export class CoreModule {
}
