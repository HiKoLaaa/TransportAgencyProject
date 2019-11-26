import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ModelModule} from './model/model.module';
import {CoreModule} from './core/core.module';
import {routing} from './routes/routes.routing';
import {GuardModule} from './guard/guard.module';
import {ServiceModule} from './service/service.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './interceptor/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ModelModule,
    CoreModule,
    routing,
    GuardModule,
    ServiceModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
