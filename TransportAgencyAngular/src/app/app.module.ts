import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ModelModule} from './model/model.module';
import {CoreModule} from './core/core.module';
import {routing} from './routes/routes.routing';
import {GuardModule} from './guard/guard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelModule,
    CoreModule,
    routing,
    GuardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
