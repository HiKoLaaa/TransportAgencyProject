import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {FindTripComponent} from './find-trip/find-trip.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [BrowserModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [HeaderComponent, FooterComponent, FindTripComponent],
  exports: [HeaderComponent, FooterComponent, FindTripComponent]
})
export class CoreModule {
}
