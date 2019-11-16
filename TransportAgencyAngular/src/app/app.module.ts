import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FIND_INFO, FindTripInfoRequestServerViewModel} from './view-model/find-trip-info.request-server.view-model';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
