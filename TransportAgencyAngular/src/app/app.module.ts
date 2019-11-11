import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FIND_INFO, FindTripInfoViewModel} from './viewModel/findTripInfo.viewModel';
import {Subject} from 'rxjs';
import {ModelModule} from './model/model.module';
import {CoreModule} from './core/core.module';
import {routing} from './routes/routes.routing';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelModule,
    CoreModule,
    routing
  ],
  providers: [
    {provide: FIND_INFO, useValue: new Subject<FindTripInfoViewModel>()}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
