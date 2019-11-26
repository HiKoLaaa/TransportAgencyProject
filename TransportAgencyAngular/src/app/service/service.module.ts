import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth/auth.service';
import {LOG_IN} from './auth/auth.log-in';
import {BehaviorSubject} from 'rxjs';

@NgModule({
  imports: [HttpClientModule],
  providers: [AuthService,
      {
        provide: LOG_IN, useValue: new BehaviorSubject<boolean>(false)
      }
    ]
})
export class ServiceModule { }
