import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {FindTripComponent} from './find-trip/find-trip.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FIND_INFO, FindTripInfoViewModel} from '../view-model/findTripInfo.viewModel';
import {BehaviorSubject} from 'rxjs';
import { TripInfoComponent } from './trip-info/trip-info.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  imports: [BrowserModule, RouterModule, FormsModule, ReactiveFormsModule, AutocompleteLibModule],
  declarations: [HeaderComponent, FooterComponent, FindTripComponent, TripInfoComponent],
  providers: [
    {provide: FIND_INFO, useValue: new BehaviorSubject<FindTripInfoViewModel>(new FindTripInfoViewModel())}
  ],
  exports: [HeaderComponent, FooterComponent, FindTripComponent]
})
export class CoreModule {
}
